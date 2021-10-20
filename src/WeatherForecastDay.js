import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

    return days[day];
  }

  return (
    <div>
      <div className="weatherForecast-day">{day()}</div>
      <div className="weatherForecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} />
        <div>
          <span className="maxForecast">{maxTemp()}°</span>{" "}
          <span className="minForecast">{minTemp()}°</span>
        </div>
      </div>
    </div>
  );
}
