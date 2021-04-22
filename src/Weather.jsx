import React, { useState } from 'react';
import './App.css';
import WeatherMain from './WeatherMain'
import Exception from './Exception'
import TextField from '@material-ui/core/TextField';
import CloudIcon from '@material-ui/icons/Cloud';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import BathtubIcon from '@material-ui/icons/Bathtub';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


const Weather = () => {

  const API_KEY = '<YOUR OWN API KEY>'

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          // console.log(result)
        });
    }
  }


  const dateBuilder = () => {
    switch (weather.timezone) {
      case (-14400):
        let newyork = new Date();
        return newyork.toLocaleString('en-US', { timeZone: 'America/New_York' })
        break;
      case (32400):
        let japan = new Date();
        return japan.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' })
        break;
      default:
      case (-25200):
        let westCoast = new Date();
        return westCoast.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
        break;
      case (-36000):
        let Hawaii = new Date();
        return Hawaii.toLocaleString('en-US', { timeZone: 'Pacific/Honolulu' })
        break;
      case (+3600):
        let london = new Date();
        return london.toLocaleString('en-US', { timeZone: 'Europe/London' })
        break;
      case (+36000):
        let sydney = new Date();
        return sydney.toLocaleString('en-US', { timeZone: 'Australia/Sydney' })
        break;
      case (+28800):
        let Shanghai = new Date();
        return Shanghai.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' })
        break;
      case (+10800):
        let mscow = new Date();
        return mscow.toLocaleString('en-US', { timeZone: 'Europe/Moscow' })
        break;
    }
  }

  const weatherIcon = () => {
    if (weather.weather[0].main === 'Clouds') {
      return <CloudIcon
        fontSize="inherit"
        color="inherit" />
    } else if (weather.weather[0].main === 'Rain') {
      return <BeachAccessIcon
        fontSize="inherit"
        color="inherit" />
    } else if (weather.weather[0].main === 'Clear') {
      return <WbSunnyIcon
        fontSize="inherit"
        color="inherit" />
    } else if (weather.weather[0].main === 'Snow') {
      return <AcUnitIcon
        fontSize="inherit"
        color="inherit" />
    } else if (weather.weather[0].main === 'Mist') {
      return <BathtubIcon
        fontSize="inherit"
        color="inherit" />
    } else {
      return <InsertEmoticonIcon
        fontSize="inherit"
        color="inherit" />
    }
  }


  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 17) ? 'warm' : 'app') : 'normal'}>
      <main>
        <div className="search-box">
          <TextField
            id="filled-basic"
            label="Search..." variant="filled"
            className="search-bar"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <WeatherMain
            query={query}
            weather={weather}
            dateBuilder={dateBuilder()}
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

export default Weather;


