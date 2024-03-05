// Importing required modules
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Importing route handlers
import userRouter from './routes/user.routes.js';
import currencyRoutes from './routes/currencyRoutes.js';
import weatherRoutes from './routes/weatherRoutes.js';
import { fetchExchangeRates } from './db/services/currencyservice.js';
import reservationRoutes from './routes/reservationRoutes.js'; 
import locationsRouter from './routes/location.route.js';


// Creating express app instance
const app = express();

// Setting up port
const PORT = process.env.PORT || 5500;

// MongoDB setup
mongoose.connect('mongodb://localhost/currency_converter', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middleware setup
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Allow requests from specified origins
    credentials: true, // Enable CORS credentials
}));
app.use(express.json({ limit: '16kb' })); // JSON body parser middleware
app.use(express.urlencoded({ extended: true, limit: '16kb' })); // URL-encoded body parser middleware
app.use(express.static('public')); // Static files middleware
app.use(cookieParser()); // Cookie parser middleware

// Setting up routes
app.use('/api/v1/users', userRouter); // User routes
app.use('/api', currencyRoutes); // Currency routes
app.use('/api', weatherRoutes); // Weather routes
app.use('/api', reservationRoutes); // Reservation routes
app.use('/api/locations', locationsRouter); // Location routes

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process on connection error
  });

// Fetch exchange rates initially
fetchExchangeRates();

// Update exchange rates every hour
setInterval(fetchExchangeRates, 3600000);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Exporting app instance
export { app };
