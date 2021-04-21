import React, { useState } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';



const Weather = () => {

  const API_KEY = 'f0bdae91ccf5e9a40eb2fed4faf710ac'

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');


  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result)
        });
    }
  }



  const dateBuilder = () => {
    let date = new Date().toString();
    date = date.slice(0, 25)
    return date;
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
          <div className="location-box">
            <div className="location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="date">
              {dateBuilder()}
            </div>
            <div className="weather-box">
              <div className="temp">
                {weather.main.temp}°
                <div className="min-max">
                  Highest：{weather.main.temp_max}°
                </div>
                <div className="min-max">
                  Lowest：{weather.main.temp_min}°
                </div>
            </div>
              <div className="weather">
                {weather.weather[0].main}
              </div>
            </div>
          </div>
        ) : (
          <div className="place">
            <p>
              Hey! You want to know the weather across the world...?
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Weather;


