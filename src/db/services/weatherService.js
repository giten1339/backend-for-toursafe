// src/services/weatherService.js
import axios from 'axios';

export async function fetchWeatherDetails(city) {
  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather details:', error);
    throw new Error('Failed to fetch weather details');
  }
}
