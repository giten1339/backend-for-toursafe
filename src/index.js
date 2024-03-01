import express from "express";
import currencyRoutes from "./routes/currrencyroutes.js";
// import userRoutes from "./routes/userRoutes";
import weatherRoutes from "./routes/weatherRoutes.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/currency", currencyRoutes);
app.use("/api/weather", weatherRoutes);
// app.use("/api/users", userRoutes);

// require('dotenv').config({path: './env'})

dotenv.config({
  path: "/.env",
});

connectDB()
  .then(() => {
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