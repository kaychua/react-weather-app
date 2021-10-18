import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherResponse from "./WeatherResponse";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="simplyWeather col-10">
        <em>{props.data.city}</em> is <WeatherResponse code={props.data.icon} />
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
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.windspeed} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
