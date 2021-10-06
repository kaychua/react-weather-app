import React from "react";

import "./Weather.css";

export default function Weather() {
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
      <h1 className="simplyWeather">The opposite of Sunny</h1>
      <ul>
        <li>last update: 12:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <span>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Weather Icon"
            />
          </span>
          <span>8</span>
          <span>C° | F°</span>
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
}
