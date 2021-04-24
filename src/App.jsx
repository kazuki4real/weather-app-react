import React, { useState } from 'react';
import './App.css';
import WeatherMain from './WeatherMain/WeatherMain'
import Exception from './Exception/Exception'
import TextField from '@material-ui/core/TextField';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import BathtubIcon from '@material-ui/icons/Bathtub';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontSize: '200px',
    color: 'rgb(104, 96, 96)'
  },
});


const App = () => {
  const classes = useStyles();
  const API_KEY = '06be6f41a220071c3adb4a3834fe0408'

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  const search = (e) => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result)
      });
  }


  const dateSet = () => {
    switch (weather.timezone) {
      case (-14400):
        let newyork = new Date();
        return newyork.toLocaleString('en-US', { timeZone: 'America/New_York' })
      case (32400):
        let japan = new Date();
        return japan.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' })
      case (-25200):
        let westCoast = new Date();
        return westCoast.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
      case (-36000):
        let Hawaii = new Date();
        return Hawaii.toLocaleString('en-US', { timeZone: 'Pacific/Honolulu' })
      case (+3600):
        let london = new Date();
        return london.toLocaleString('en-US', { timeZone: 'Europe/London' })
      case (+36000):
        let sydney = new Date();
        return sydney.toLocaleString('en-US', { timeZone: 'Australia/Sydney' })
      case (+28800):
        let Shanghai = new Date();
        return Shanghai.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' })
      case (+10800):
        let mscow = new Date();
        return mscow.toLocaleString('en-US', { timeZone: 'Europe/Moscow' })
    }
  }

  const weatherIcon = () => {
    if (weather.weather[0].main === 'Clouds') {
      return <CloudOutlinedIcon
        className={classes.root} />
    } else if (weather.weather[0].main === 'Rain') {
      return <BeachAccessIcon
        className={classes.root} />
    } else if (weather.weather[0].main === 'Clear') {
      return <WbSunnyOutlinedIcon
        className={classes.root} />
    } else if (weather.weather[0].main === 'Snow') {
      return <AcUnitIcon
        className={classes.root} />
    } else if (weather.weather[0].main === 'Mist') {
      return <BathtubIcon
        className={classes.root} />
    } else {
      return <InsertEmoticonIcon
        className={classes.root} />
    }
  }

  const setValue = (e) => {
    return setQuery(e.target.value);
  }


  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 17) ? 'warm' : 'app') : 'normal'}>
      <main>
        <form onSubmit={search} className="search-box">
          <TextField
            id="filled-basic"
            label="e.g. Tokyo" variant="filled"
            className="search-bar"
            value={query}
            onChange={setValue}
          />
        </form>
        {(typeof weather.main != "undefined") ? (
          <WeatherMain
            query={query}
            weather={weather}
            dateSet={dateSet()}
            weatherIcon={weatherIcon()}
          />
        ) : (
          <Exception
            weather={weather}
          />
        )}
      </main>
    </div>
  );
}

export default App;


