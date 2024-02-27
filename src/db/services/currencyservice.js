import mongoose from "mongoose";
import Currency from "./models/currencyconverter.model.js";
import axios from 'axios';

async function fetchExchangeRates() {
  try {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
    const rates = response.data.rates;
    for (let code in rates) {
      await Currency.findOneAndUpdate({ code }, { rate: rates[code] }, { upsert: true });
    }
    console.log('Exchange rates updated successfully.');
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
  }
}

export { fetchExchangeRates };
