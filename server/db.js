const mongoose = require('mongoose');

// Connecting to the MongoDB database(inotebook) 
const mongoURI = "mongodb://localhost:27017/inotebook?directConnection=true"

// Funtion to connect to the database
const connectToMongo = async () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
}

module.exports = connectToMongo;