import express from 'express';
import { createReservation } from '../services/reservationService.js';

const router = express.Router();

router.post('/reservations', async (req, res) => {
  try {
    const reservation = await createReservation(req.body);
    res.status(201).json(reservation);
  } catch (error) {
    console.error('Error creating reservation:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add more routes as needed
