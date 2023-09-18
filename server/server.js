const connectToMongo  = require('./db');
const express = require('express');

connectToMongo();

const app = express()
const port = 3000 // Port to run localhost

app.use(express.json());  // Parse incoming JSON data from HTTP requests

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening at : http://localhost:${port}`)
})
