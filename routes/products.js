const express = require('express');
const router = express.Router();
const faker = require('faker');

const logger = (req, res, next) => {
  console.info(req.params);
  next();
};

router.get('/', (req, res) => {
  res.status(200)
    .send([{
      id: faker.random.number(),
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      color: faker.commerce.color()
    }])
});

router.get('/:id', (req, res) => {
  res.status(200)
    .send({
      id: req.params.id,
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      color: faker.commerce.color()
    })
});

router.post('/', (req, res) => {
  res.status(201)
    .send(req.body);
});

router.delete('/:id', logger, (req, res) => {
  res.status(204)
    .send({
      id: req.params.id,
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      color: faker.commerce.color(),
      status: 'inactive'
    })
});

module.exports = router;