const express = require('express');
const db = require('./data/helpers.js');

const router = express.Router();

router.get('/', (req, res) => {
  db.find().then(cars => {
    res.status(200).json(cars);
  }).catch(err => {
    res.status(500).json({message: error})
  })
})

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db.find(id).then(cars => {
    res.status(200).json(cars);
  }).catch(err => {
    res.status(500).json({message: error})
  })
})

router.post('/', (req, res) => {
  db.insert(req.body).then(carId => {
    const id = parseInt(carId.toString())
    db.find(id).then(car => {
      console.log(car)
      res.status(200).json(car);
    })
  }).catch(err => {
    res.status(500).json({message: err})
  })
})

module.exports = router;
