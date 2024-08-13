import express from "express"
import cors from "cors"

// To perform crud operation on client's side
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
}))

// Data from forms
app.use(express.json({ limit: "16kb" }))

// Data from urls
// extended means object inside object
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

app.use(express.static("public"))
app.use(cookieParser())

import userRouter from './routes/user.routes.js'

// Routes declaration 
// You have to use 'use' as we have to use middlewares
app.use("/users", userRouter)
// Till here the url is http://localhost:8000/users
// Then it gives control to the userRouter.

export { app }