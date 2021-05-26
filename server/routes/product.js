const express = require('express');

const router = express.Router();
const productController = require('../controllers').product;

router.post('/create', (req, res) => productController.createProduct(req, res))
router.put('/update/:id', (req, res) => productController.updateProduct(req, res))
router.delete('/delete/:id', (req, res) => productController.deleteProduct(req, res))
router.get('/:id', (req, res) => productController.getProductById(req, res))
router.get('/', (req, res) => productController.getProduct(req, res))

module.exports = router;