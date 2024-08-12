import mongoose, {mongo, Schema} from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            // To make the users searchable
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        watchHistory: {
            type: Schema.Types.ObjectId,
            ref: "Manga"
        }
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)