require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const app = express();

// This is just for the connection for the test Database
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));


// Port from Env & to allow our server to accept JSON data
const port = process.env.SERVER_PORT
app.use(express.json())

app.get("/", (_, res) => res.send("Hello World"));


// Routes
const testRouter = require('../routes/test');
app.use('/test', testRouter);

app.listen(port, () => {
  console.log(`Server running on port:${port}`)
});