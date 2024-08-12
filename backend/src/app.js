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

// import userRouter from './routes/user.routes.js'
// import mangaRouter from "./routes/manga.routes.js"
// import dashboardRouter from "./routes/dashboard.routes.js"
// app.use("/api/v1/users", userRouter)
// app.use("/api/v1/dashboard", dashboardRouter)

// http://localhost:8000/api/v1/users/register

export { app }