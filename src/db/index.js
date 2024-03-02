import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Connecting to MongoDB using environment variable and database name
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        
        // Logging successful connection
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        // Logging connection error and exiting process with error code 1
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
}

export default connectDB;
