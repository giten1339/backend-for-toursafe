import express from 'express';
import Currency from '../models/currencyconverter.model.js';

const router = express.Router();

router.get('/convert', async (req, res) => {
  try {
    const { amount, from, to } = req.query;
    const fromCurrency = await Currency.findOne({ code: from });
    const toCurrency = await Currency.findOne({ code: to });
    if (!fromCurrency || !toCurrency) {
      return res.status(400).json({ error: 'Invalid currency code' });
    }
    
    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }
    
    if (fromCurrency.rate === 0 || toCurrency.rate === 0) {
      return res.status(400).json({ error: 'Exchange rate is zero' });
    }

    const result = (amount / fromCurrency.rate) * toCurrency.rate;
    res.json({ amount: result });
  } catch (error) {
    console.error('Error converting currency:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
