import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [temperature, setTemperature] = useState(null);
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState("");

  function displayApp(response) {
    console.log(response.data);
    setReady(true);
    setTemperature(Math.round(response.data.main.temp));
    setCity("Melbourne");
  }

  if (ready) {
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
          <em>{city}</em> is The opposite of Sunny
        </h1>
        <ul>
          <li>last update: 12:00</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
          <div className="clear-fix col-6">
            <span>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Weather Icon"
                className="weatherIcon"
              />
            </span>
            <span className="temperature">{temperature}</span>
            <span className="units"> C° | F°</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 68 %</li>
              <li>Windspeed: 0.1 km/h</li>
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
