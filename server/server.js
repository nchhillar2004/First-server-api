const connectToMongo  = require('./db');
const express = require('express');
const config = require('./server.config.json');
connectToMongo();

const app = express()
const port = config.app.port; // Port to run localhost
const name = config.app.name;

app.use(express.json());  // Parse incoming JSON data from HTTP requests

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`${name} app server listening at : http://localhost:${port}`)
})
