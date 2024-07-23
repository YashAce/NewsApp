/**
@CreatedBy    : Yashwanth S
@CreatedTime  : July 21 2024
@ModifiedBy   : Yashwanth S
@ModifiedTime : July 21 2024
@Description  : This file handles rendering logics for weather component.
**/

import { useState } from 'react';
import axios from 'axios';
import WeatherWidget from '../components/WeatherWidget.jsx';

export default function Weather() {
  const [city, setCity] = useState('');
  const [cityID, setCityID] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    setError(''); // Clear any previous errors
    try {
      const response = await axios.get(`/api/weather?city=${city}`);
      console.log("cityID", response)
      setCityID(response.data);
    } catch (error) {
      setError('Please enter a valid city name.');
      console.error('Failed to fet66666666666ch weather data:', error);
    }
  };

  return (
    <div>
<div className="flex flex-col items-start justify-start bg-gradient-to-r from-blue-400 to-blue-600 p-4">
    <div className="flex w-3/5 space-x-8">
      <div className="w-1/2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl text-white mb-6">Weather</h1>
        <input
          type="text"
          className="w-full p-3 mb-4 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Enter city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setCityID(null); // Reset cityID when city input changes
            setError(''); // Clear error when city changes
          }}
        />
        <button
          onClick={fetchWeather}
          className="w-full p-3 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}

      </div>
      <div className="w-1/2 pl-8">
      {cityID ? (
        <WeatherWidget key={cityID} cityId={cityID} />
      ) : (
        <div className="absolute top-20 mr-3 items-center justify-center bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg p-8">
          <p className="text-white text-2xl font-semibold shadow-md">
          🌦️ Discover the secrets of the skies! 🌤️ Enter your city to unveil real-time weather updates and plan your day with confidence!

          </p>
        </div>
      )}
    </div>
    </div>
  </div>
  </div>
  );
}
