import Location from '../models/location.model.js';

export const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    console.error("Error fetching locations:", err);
    res.status(500).send("Error");
  }
};

export const getLocationById = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).send("Location not found");
    }
    res.json(location);
  } catch (err) {
    console.error("Error fetching location:", err);
    res.status(500).send("Error");
  }
};

export const createLocation = async (req, res) => {
  const newLocation = req.body;
  try {
    const location = await Location.create(newLocation);
    res.json(location);
  } catch (err) {
    console.error("Error adding location:", err);
    res.status(500).send("Error");
  }
};
