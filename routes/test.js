const express = require('express');
const router = express.Router();
const Test = require('../models/test')

// Get all test info
router.get('/', async (req, res) => {
  try {
    const test = await Test.find()
    // To send Test data via JSON
    res.json(test)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});


// Getting a single test
router.get('/:id', (req, res) => {
  res.send(req.params.id)
  
});


// Creating a test
router.post('/', (req, res) => {

  
})

// Updating a test
// Using patch instead of put, because we want to update only the information that gets passed, not all the information
router.patch('/', (req, res) => {

  
})


// Deleting a test
router.delete('/:id', (req, res) => {

  
})


module.exports = router