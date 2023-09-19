const mongoose = require("mongoose");
const { Schema } = mongoose;

// Structure of "notes" Schema
const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: "General",
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// Create "notes" schema in database(inotebook)
const Notes = mongoose.model("notes", NotesSchema);
module.exports = Notes;
