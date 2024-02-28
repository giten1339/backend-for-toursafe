import Reservation from '../models/reservation.js';

export async function createReservation(data) {
  try {
    return await Reservation.create(data);
  } catch (error) {
    console.error('Error creating reservation:', error);
    throw new Error('Failed to create reservation');
  }
}

// Add more service functions as needed (e.g., updateReservation, cancelReservation)
