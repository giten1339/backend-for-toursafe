import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// Define schema for comments
const commentSchema = new Schema(
    {
        // Content of the comment
        content: {
            type: String,
            required: true,
        },
        // Reference to the video the comment belongs to
        video: {
            type: Schema.Types.ObjectId,
            ref: "video"
        },
        // Reference to the owner (user) of the comment
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
commentSchema.plugin(mongooseAggregatePaginate);

// Exporting Comment model
export const Comment = mongoose.model("Comment", commentSchema);
