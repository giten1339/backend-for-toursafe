import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  hotelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
  guestName: String,
  checkInDate: Date,
  checkOutDate: Date,
  // Add more fields as needed
});

export default mongoose.model('Reservation', reservationSchema);
