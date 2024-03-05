// location.service.js
import axios from 'axios';
import { googleMapsApiKey } from '../config.js';

const geocodeAddress = async (address) => {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address,
        key: googleMapsApiKey
      }
    });
    const { results } = response.data;
    if (results && results.length > 0) {
      const { formatted_address, geometry: { location } } = results[0];
      return { address: formatted_address, latitude: location.lat, longitude: location.lng };
    } else {
      throw new Error('Location not found');
    }
  } catch (error) {
    console.error('Error geocoding address:', error);
    throw error;
  }
};

export { geocodeAddress };
