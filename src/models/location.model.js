import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const locationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  }
});

export default model('Location', locationSchema);
