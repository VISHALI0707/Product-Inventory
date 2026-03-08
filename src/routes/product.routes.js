const express = require('express');
const { createProduct, getProducts, updateProduct, deleteProduct, searchProducts } = require('../controllers/product.controller');
const { protect } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', protect, createProduct);
router.get('/', protect, getProducts);
router.get('/search', protect, searchProducts);
router.put('/:id', protect, updateProduct);
router.delete('/:id', protect, deleteProduct);

module.exports = router;