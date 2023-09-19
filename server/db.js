const mongoose = require("mongoose");
require("dotenv").config();
const config = require("./server.config.js");

// Importing data(port, name) from server.config.js
const port = config.database.port; // Port to run localhost
const name = config.database.name; // App name
const mongoURI = config.database.uri; // Connecting to the MongoDB database(inotebook)

// Funtion to connect to the database
const connectToMongo = async () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("--------------------------------------------");
    console.log("🚀 Server Status:");
    console.log(`    -Connected to MongoDB ${name} at port ${port}`);
};

module.exports = connectToMongo;
