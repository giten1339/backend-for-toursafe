import express from 'express';
import { getAllLocations, getLocationById, createLocation } from '../controllers/locationController.js';

const router = express.Router();

router.get('/', getAllLocations);
router.get('/:id', getLocationById);
router.post('/', createLocation);
// Add more routes as needed (update, delete, etc.)

export default router;
