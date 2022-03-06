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
router.get('/:id', getTest, (req, res) => {
  // This will connect to the getTest function (line 54)
  // res.send(res.test.name)
  res.json(res.test)
});


// Creating a test
router.post('/', async (req, res) => {
  const test = new Test({
    name: req.body.name,
    testData: req.body.testData,
  })

  try {
    const newTest = await test.save()
    res.status(201).json(newTest)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }

})

// Updating a test
// Using patch instead of put, because we want to update only the information that gets passed, not all the information
router.patch('/:id', getTest, async (req, res) => {

  if (req.body.name != null) {
    res.test.name = req.body.name
  }
  if (req.body.testData != null) {
    res.test.testData = req.body.testData
  }
  try {
    const updatedTest = await res.test.save()
    res.status(201).json(updatedTest)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})


// Deleting a test
router.delete('/:id', getTest, async (req, res) => {
  try {
    await res.test.remove()
    res.status(201).json({ message: 'Deleted test' })
  } catch (err) {
    res.status(500).json({ message: err. message })
  }
})

// Get Test Middleware
async function getTest(req, res, next) {
  let test
  try {
    test = await Test.findById(req.params.id)
    if ( test == null ) {
      // We want immediately leave the process after, hence the return.
      return res.status(404).json({ message: 'Cannot find test id.' })
    } 
  } catch (err) {
    return res.status(500).json( { message: err.message } )
  }
  res.test = test
  // Next parameter: If we call this, move on to the next section of our code
  next()
}


module.exports = router