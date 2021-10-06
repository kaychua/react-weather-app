import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayApp(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: `Melbourne`,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `https://http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather card">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Search for a city"
              />
            </div>
            <div className="col-3">
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
        <h1 className="simplyWeather col-8">
          <em>{weatherData.city}</em> is The opposite of Sunny
        </h1>
        <ul>
          <li>last update: 12:00</li>
          <li className="text-capitalize">{weatherData.description}</li>
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
            <span className="temperature">{weatherData.temperature}</span>
            <span className="units"> C° | F°</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Windspeed: {weatherData.windspeed} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "616d4f1d4c8141d448674e1f1ec401a1";
    let city = "Melbourne";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayApp);
    return <div>Loading...</div>;
  }
}
