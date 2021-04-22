import React from 'react'

const Exception = (props) => {
  return (
    <div className="exception">
      {props.weather.cod === '404' || props.weather.cod === '400' ? (
        props.weather.message
      ) : (
        <div>Hey! How is the weather in your area?</div>
      )}
    </div>
  )
}

export default Exception;