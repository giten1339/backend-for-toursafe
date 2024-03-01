import mongoose from "mongoose";

const currencySchema = new mongoose.Schema({
  code: String,
  rate: Number,
});

const Currency = mongoose.model("Currency", currencySchema);

export default Currency;