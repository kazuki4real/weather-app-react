import React from 'react'
import './WeatherMain.css'

const WeatherMain = (props) => {
  return (
    <div className="location-box">
      <div className="location">
        {props.weather.name}, {props.weather.sys.country}
      </div>
      <div className="date">
        {props.dateSet}
      </div>
      <div className="weather-box">
        <div className="temp">
          <div className="icon">
            {props.weatherIcon}
          </div>
          {Math.round(props.weather.main.temp)}°
                <div className="min-max">
            Highest：{Math.round(props.weather.main.temp_max)}°
                  Lowest：{Math.round(props.weather.main.temp_min)}°
                </div>
        </div>
        <div className="weather">
          {props.weather.weather[0].main}
        </div>
      </div>
    </div>
  )
}

export default WeatherMain;