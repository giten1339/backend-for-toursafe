import mongoose, { Schema } from "mongoose";

// Define schema for playlists
const playlistSchema = new Schema({
    // Name of the playlist
    name: {
        type: String,
        required: true
    },
    // Description of the playlist
    description: {
        type: String,
        required: true
    },
    // Videos included in the playlist
    videos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    // Owner of the playlist
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
}, 
{ timestamps: true }); // Adds createdAt and updatedAt timestamps

// Exporting Playlist model
export const Playlist = mongoose.model("Playlist", playlistSchema);
