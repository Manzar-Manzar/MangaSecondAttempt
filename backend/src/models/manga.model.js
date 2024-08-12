import mongoose, {Schema} from "mongoose"

const mangaSchema = new Schema({
    imageFile: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0,
    }
}, {timestamps: true})

export const Manga = mongoose.model("Manga", mangaSchema)