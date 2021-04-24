import React from 'react'
import './Exception.css'

const Exception = (props) => {
  return (
    <div className="exception">
      {props.weather.cod === '404' ? props.weather.message
        : props.weather.cod === '400' ? <div>Type proper location!</div>
        : <div className="topMessage">Hey! How is the weather in your area?</div>}

      {/* {props.weather.cod === '404' ? props.weather.message
        : <div className="topMessage">
          Type the location !</div>
      } */}
    </div>
  )
}

export default Exception;
