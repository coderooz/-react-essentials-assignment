import React from 'react';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  // Destructure API response
  const { name, main, weather: details, wind } = weather;
  const iconUrl = `https://openweathermap.org/img/wn/${details[0].icon}@2x.png`;

  return (
    <div className="weather-display">
      <div className="weather-header">
        <h2>{name}</h2>
        <img src={iconUrl} alt={details[0].description} />
        <p className="description">{details[0].description}</p>
      </div>

      <div className="weather-stats">
        <div className="stat-card">
          <p className="label">Temperature</p>
          <p className="value">{Math.round(main.temp)}°C</p>
        </div>
        <div className="stat-card">
          <p className="label">Humidity</p>
          <p className="value">{main.humidity}%</p>
        </div>
        <div className="stat-card">
          <p className="label">Wind Speed</p>
          <p className="value">{wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;