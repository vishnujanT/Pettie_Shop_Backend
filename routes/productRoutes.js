// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// GET all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});

// POST a new product
router.post('/', async (req, res) => {
    const product = new Product(req.body);
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// More routes can be added here for updating and deleting products
module.exports = router;
