import React from 'react'
import WeatherDetail from '../WeatherDetail/WeatherDetail'
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
          <WeatherDetail
          temp={props.weather.main}
          />
          <div className="weather">
            {props.weather.weather[0].main}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherMain;