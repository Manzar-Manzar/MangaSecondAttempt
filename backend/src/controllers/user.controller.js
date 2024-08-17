import { User} from "../models/user.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const registerUser = asyncHandler (async (req, res) => {
    console.log("Triggered");
    return res.status(200).json("ok");
})
const login = () => {
    console.log("Login")
}

export {
    registerUser,
    login
}