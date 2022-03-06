require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const app = express();
require('../db/init_mongodb')



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