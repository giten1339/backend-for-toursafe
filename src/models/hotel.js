import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  // Add more fields as needed
});

export default mongoose.model('Hotel', hotelSchema);
