// location.route.js
import express from 'express';
import { geocodeAddress } from '../services/location.service.js';

const router = express.Router();

// Route to geocode an address
router.post('/geocode', async (req, res) => {
  try {
    const { address } = req.body;
    const locationData = await geocodeAddress(address);
    res.json(locationData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
