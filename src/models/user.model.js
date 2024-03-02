// Importing necessary modules
import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Defining user schema
const userSchema = new Schema({
    // Username field properties
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    // Email field properties
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    // Full name field properties
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    // Avatar field properties
    avatar: {
        type: String,
        required: true,
    },
    // Cover image field properties
    coverImage: {
        type: String,
    },
    // Watch history field properties
    watchHistory: [{
        type: Schema.Types.ObjectId,
        ref: "video"
    }],
    // Password field properties
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    // Refresh token field properties
    refreshToken: {
        type: String
    }
}, { timestamps: true });

// Middleware to hash password before saving
userSchema.pre("save", async function(next) {
    // Checking if password is modified
    if (!this.isModified("password")) return next();

    // Hashing password
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Method to verify if password is correct
userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
};


// Method to generate access token
userSchema.methods.generateAccessToken = function() {
    return jwt.sign({
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
};

// Method to generate refresh token
userSchema.methods.generateRefreshToken = function() {
    return jwt.sign({
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    );
};

// Exporting user model
export const User = mongoose.model("User", userSchema);
