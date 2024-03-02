import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// Define schema for videos
const videoSchema = new Schema(
    {
        // Cloudinary URL for video file
        videoFile: {
            type: String,
            required: true,
        },
        // Cloudinary URL for thumbnail
        thumbnail: {
            type: String,
            required: true,
        },
        // Title of the video
        title: {
            type: String,
            required: true,
        },
        // Description of the video
        description: {
            type: String,
            required: true,
        },
        // Duration of the video in seconds
        duration: {
            type: Number,
            required: true,
        },
        // Number of views for the video
        views: {
            type: Number,
            default: 0,
        },
        // Flag indicating if the video is published
        isPublished: {
            type: Boolean,
            default: true
        },
        // Owner of the video
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true // Adds createdAt and updatedAt timestamps
    }
);

// Plugin for pagination using aggregate
videoSchema.plugin(mongooseAggregatePaginate);

// Exporting Video model
export const Video = mongoose.model("Video", videoSchema);
