import mongoose from "mongoose"
import {Manga} from "../models/manga.model.js"
import {Subscription} from "../models/subscription.model.js"
import {Like} from "../models/like.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const getChannelStats = asyncHandler(async (req, res) => {
    // TODO: Get the channel stats like total manga views, total subscribers, total mangas, total likes etc.
})

const getChannelMangas = asyncHandler(async (req, res) => {
    // TODO: Get all the mangas uploaded by the channel
})

export {
    getChannelStats, 
    getChannelMangas
    }