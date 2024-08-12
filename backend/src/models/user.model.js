import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("users", UserSchema)

module.exports = User