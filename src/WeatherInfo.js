import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="simplyWeather col-8">
        <em>{props.data.city}</em> is The opposite of Sunny
      </h1>
      <ul>
        <li>
          last updated:
          <br />
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="clearfix col-6">
          <span>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Weather Icon"
              className="weatherIcon"
            />
          </span>
          <span className="temperature">{props.data.temperature}</span>
          <span className="units"> C° | F°</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Windspeed: {props.data.windspeed} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
