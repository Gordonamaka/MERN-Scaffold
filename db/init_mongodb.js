require('dotenv').config();
const { Admin } = require('mongodb');
// Instead of MongoClient, we are using Mongoose
const mongoose = require('mongoose');


// This is just for the connection for the test Database - If you do not have admin credentials, you can skip the auth/user/pass authentication.
mongoose
.connect(process.env.DATABASE_URL, {
  "auth": {
    "authSource": Admin
  },
  "user": process.env.USER,
  "pass": process.env.PASS
})
  .then(() => {
    console.log('Mongodb Connected')
  })
  .catch((err) => console.log(err.message))

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));
db.on('Disconnected', () => console.log('Mongoose connection is disconnected'))

process.on('SIGINT', async () => {
  await mongoose.connection.close()
  process.exit(0)
})