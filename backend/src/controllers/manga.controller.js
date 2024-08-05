import mongoose, {isValidObjectId} from "mongoose"
import {Manga} from "../models/manga.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"


const getAllMangas = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query
    //TODO: get all mangas based on query, sort, pagination
})

const publishAManga = asyncHandler(async (req, res) => {
    const { title, description} = req.body
    // TODO: get manga, upload to cloudinary, create manga
})

const getMangaById = asyncHandler(async (req, res) => {
    const { mangaId } = req.params
    //TODO: get manga by id
})

const updateManga = asyncHandler(async (req, res) => {
    const { mangaId } = req.params
    //TODO: update manga details like title, description, thumbnail

})

const deleteManga = asyncHandler(async (req, res) => {
    const { mangaId } = req.params
    //TODO: delete manga
})

const togglePublishStatus = asyncHandler(async (req, res) => {
    const { mangaId } = req.params
})

export {
    getAllMangas,
    publishAManga,
    getMangaById,
    updateManga,
    deleteManga,
    togglePublishStatus
}