import logo from "./logo.svg";

import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a href="https://github.com/kaychua/react-weather-app">
            Open-source-code
          </a>{" "}
          weather app by Kay Chua
        </footer>
      </div>
    </div>
  );
}

export default App;
