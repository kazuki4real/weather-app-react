import React from 'react';
import './WeatherDetail.css';

const toggle = () => {
  const mask = document.getElementById('mask');
  mask.classList.toggle('hidden');
  const modal = document.getElementById('modal');
  modal.classList.toggle('hidden');
  const close = document.getElementById('close');
  close.classList.toggle('hidden');
}

const WeatherDetail = (props) => {
  return (
    <div>
      <div id="detail" onClick={() => toggle()}>{Math.round(props.temp.temp)}°</div>
      <div id="mask" className="hidden" onClick={() => toggle()}></div>
      <section id="modal" className="min-max hidden">
        <p>
          Highest：{Math.round(props.temp.temp_max)}°
        </p>
        <p>
          Lowest：{Math.round(props.temp.temp_min)}°
        </p>
        <p>
          Feels Like: {Math.round(props.temp.feels_like)}°
        </p>
        <p>
          Humidity: {Math.round(props.temp.humidity)}%
        </p>
        <p>
          Preasure: {Math.round(props.temp.pressure)}hPa
        </p>
        <div id="close" onClick={() => toggle()}>CLose</div>
      </section>
    </div>
  )
}

export default WeatherDetail;