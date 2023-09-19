const mongoose = require("mongoose");
const { Schema } = mongoose;

// Structure of "user" Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// Create "user" schema in database(inotebook)
const User = mongoose.model("user", UserSchema);
module.exports = User;
