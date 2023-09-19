const connectToMongo = require("./db");
const express = require("express");
const config = require("./server.config.js");
connectToMongo();

const app = express();

// Importing data(port, name) from server.config.js
const port = config.app.port; // Port to run localhost
const name = config.app.name; // App name

app.use(express.json()); // Parse incoming JSON data from HTTP requests

//Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
    console.log(`    -${name} server listening at : http://localhost:${port}`);
    console.log("--------------------------------------------");
    console.log("🌐 Server is now listening for incoming requests.");
    console.log("--------------------------------------------");
});
