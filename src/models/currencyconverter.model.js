import mongoose from 'mongoose';

const currencySchema = new mongoose.Schema({
  code: String,
  rate: Number,
});


export const Currency = mongoose.model('Currency', currencySchema);

