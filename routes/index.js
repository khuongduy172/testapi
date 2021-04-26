var express = require('express');
var router = express.Router();
const {GetProducts, GetProductById,AddProduct,UpdateProductById,DeleteProductById} = require('../middlewares/products.middleware')
/* GET home page. */
router.get('/', async function(req, res, next) {
  const products = await GetProducts();
  res.json(products);
});
router.get('/:id', async function (req, res, next) {
  const product = await GetProductById(req.params.id);
  res.json(product);
})

router.post('/', async (req, res, next) => {
  const product = await AddProduct(req.body);
  res.json(product);
})

router.delete('/:id', async (req, res, next) => {
  const {id} = req.params;
  const deleted = await DeleteProductById(id);
  res.json(deleted);
})

router.put('/:id', async (req, res, next) => {
  const {id} = req.params;
  const updated = await UpdateProductById(id, req.body);
  res.json(updated);
})

module.exports = router;
