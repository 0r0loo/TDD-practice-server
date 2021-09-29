const epxress = require('express');
const router = epxress.Router();
const products = require('../controller').products;

router.post('/', products.createProduct);

module.exports = router;
