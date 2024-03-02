// Importing necessary modules and utilities
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler.js";
import  jwt from "jsonwebtoken"; // Corrected import statement for JWT
import { User } from "../models/user.model.js";

// Middleware function to verify JWT token
export const verifyJWT = asyncHandler(async(req, res, next) => {
   try {
     // Extracting JWT token from request
     const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
 
     // If token is missing, throw an unauthorized error
     if (!token) {
         throw new ApiError(401, "Unauthorized request");
     }
     
     // Verifying JWT token
     const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
 
     // Finding user by decoded token ID
     const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
 
     // If user is not found, throw an unauthorized error
     if (!user) {
         throw new ApiError(401, "Invalid Access Token");
     }
 
     // Assigning user to request object for further use
     req.user = user;
     // Proceed to the next middleware
     next();
   } catch (error) {
     // If any error occurs during JWT verification, throw an unauthorized error
     throw new ApiError(401, error?.message || "Invalid Access Token");
   }
});
