import express from "express";
import currencyRoutes from "./routes/currrencyroutes.js";
// import userRoutes from "./routes/userRoutes";
import weatherRoutes from "./routes/weatherRoutes.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

const app = express();
// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Setting up routes
app.use("/api/currency", currencyRoutes);
app.use("/api/weather", weatherRoutes);
// app.use("/api/users", userRoutes);

// require('dotenv').config({path: './env'})
// Loading environment variables from .env file

dotenv.config({
  path: "/.env",
});
// Connecting to the database
connectDB()
  .then(() => {
        // Starting the server
    app.listen(process.env.PORT || 5500, () => {
      console.log(` Server is running at port:  ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!!", err);
  });


  

/*

import express from "express";
const app = express()

( async () => {
    try{
        await mongoose.connect('${process.env.MONGODB_URL}/${DB_NAME}')
        app.on("error", (error) => {
            console.log("Error found :", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log('App is listening on port' $ {process.env.PORT});
        })
    }catch (error){ 
        console.error("ERROR:" . error)
        throw err 
    
    }
})()

*/