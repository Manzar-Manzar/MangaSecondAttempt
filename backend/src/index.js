// First Method to connect to db

// import mongoose from "mongoose"
// import { DB_NAME } from "./constants"
// import express from "express"

// const app = express()
// ;( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", () => {
//             console.log("App not able to talk to server: ", error)
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log("DB error : ", error);
//     }
// } )()

import dotenv from "dotenv"
import connectDB from "./db/index.js"
import {app} from './app.js'

dotenv.config({
    path: './env'
})


connectDB()
    .then(() => {
        app.on("error", () => {
            console.log("App not able to talk to server: ", error)
            throw error;
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`SERVER IS RUNNING AT PORT: ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log("MONGODB CONNECTION ERROR", error)
    })
