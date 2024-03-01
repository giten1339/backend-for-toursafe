// src/routes/weatherRoutes.js
import express from "express";
import { fetchWeatherDetails } from "../db/services/weatherService.js";

const router = express.Router();

router.get("/weather", async (req, res) => {
  try {
    const { city } = req.query;
    if (!city) {
      return res.status(400).json({ error: "City parameter is missing" });
    }
    const weatherDetails = await fetchWeatherDetails(city);
    res.json(weatherDetails);
  } catch (error) {
    console.error("Error fetching weather:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;