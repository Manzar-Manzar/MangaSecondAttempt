import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { User } from './src/models/user.model.js'; // Import the User model

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/manga/getStarted', (req, res) => {
    User.create(req.body)
        .then(user => res.status(201).json(user)) // Status code 201 for resource creation
        .catch(err => res.status(400).json({ error: err.message })); // Status code 400 for bad request
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


app.post('/manga/login', (req, res) => {
    const {email, password} = req.body
    User.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("the password is incorrect")
            }
        } else {
            res.json("User not found")
        }
    })
})