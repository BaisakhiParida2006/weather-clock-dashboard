import { useState } from "react";
import axios from "axios";

const Weather = ({ setPage }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "fd02a609971037b9eae9c7a54d889337";

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeather(response.data);
    } catch (error) {
      alert("City not found");
    }
  };

  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => setPage("home")}>
        Back</button>

      <div className="glass-box">
        <h1>Weather App</h1>

        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}/>

        <button onClick={getWeather}>
          Get Weather</button>

        {weather && (
          <div className="weather-data">
            <h2>{weather.name}</h2>
            <p>Temp: {weather.main.temp} °C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Condition: {weather.weather[0].main}</p>
            <p>Wind: {weather.wind.speed} km/h</p>
          </div>)}
      </div>
    </div>
  );
};

export default Weather;