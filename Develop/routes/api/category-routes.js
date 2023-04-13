const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // SELECT * FROM tableName;
  Category.findAll({
    // be sure to include its associated Products
    include: [Product]
  }).then(data => {
    console.log("Data: ", data);
    // send the data back to the client/Requesting end
    res.status(200).json(data);
  }).catch(error => {
    throw error;
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
