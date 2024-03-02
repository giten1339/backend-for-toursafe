import mongoose,{Schema} from "mongoose";
// Define schema for likes
const likeSchema = new Schema({
    video: {
            // Reference to the video being liked
        type: Schema.Types.ObjectId,
        ref: "video"
    },
    comment: {
            // Reference to the comment being liked
        type: Schema.Types.ObjectId,
        ref: "Comment"
    },
    tweet: {
            // Reference to the tweet being liked
        type: Schema.Types.ObjectId,
        ref: "Tweet"
    },
    likedBy: {
            // Reference to the user who liked

        type: Schema.Types.ObjectId,
        ref: "user"
    },
}, {timestamps: true})
// Exporting Like model

export const Like = mongoose("Like", likeSchema)