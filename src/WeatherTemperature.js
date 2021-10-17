import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metrics");

  function toFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function toCelsius(event) {
    event.preventDefault();
    setUnit("metrics");
  }

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "metrics") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          {" "}
          C° |{" "}
          <a href="/" onClick={toFahrenheit}>
            F°
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">{fahrenheit()}</span>
        <span className="units">
          {" "}
          <a href="/" onClick={toCelsius}>
            C°{" "}
          </a>
          | F°
        </span>
      </span>
    );
  }
}
