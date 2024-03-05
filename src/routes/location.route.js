import express from 'express';
import axios from 'axios';
import Location from '../models/location.model.js';
import { googleMapsApiKey } from '../config.js';

const router = express.Router();

// Route to fetch location from Google Maps API
router.post('/geocode', async (req, res) => {
  try {
    const { address } = req.body;
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address,
        key: googleMapsApiKey
      }
    });
    const { results } = response.data;
    if (results && results.length > 0) {
      const { formatted_address, geometry: { location } } = results[0];
      res.json({ address: formatted_address, latitude: location.lat, longitude: location.lng });
    } else {
      res.status(404).json({ message: 'Location not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
