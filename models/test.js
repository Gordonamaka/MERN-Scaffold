const mongoose = require('mongoose');

// Test Schema, just for the mongodb server to understand the data that would be passed
const testSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  testData: {
    type: String,
    required: true
  },
  testDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

// This allows us to interact directly with the DB
module.exports = mongoose.model('Test', testSchema)
