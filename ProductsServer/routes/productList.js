const express = require('express');
const router = express.Router();
const ProductList = require('../models/ProductList');

// get top rated products
router.get('/products/topRated', async (req, res) => {
    try {
      const topRatedProducts = await ProductList.findAll({ where: { TopRated: true } });
      res.json(topRatedProducts);
    } catch (err) {
      console.error('Error fetching top rated products:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // get special offers
  router.get('/products/specialOffers', async (req, res) => {
    try {
      const specialOffers = await ProductList.findAll({ where: { SpecialOffer: true } });
      res.json(specialOffers);
    } catch (err) {
      console.error('Error fetching special offers:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // get bestsellers
  router.get('/products/bestsellers', async (req, res) => {
    try {
      const bestsellers = await ProductList.findAll({ where: { BestSeller: true } });
      res.json(bestsellers);
    } catch (err) {
      console.error('Error fetching bestsellers:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// to add a new product
router.post('/products', async (req, res) => {
  const { ProductName, Price, TopRated, SpecialOffer, BestSeller, Reviews } = req.body;
  try {
    const newProduct = await ProductList.create({
      ProductName,
      Price,
      TopRated,
      SpecialOffer,
      BestSeller,
      Reviews
    });
    res.status(201).json(newProduct);
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// get a single product by ID
router.get('/products/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await ProductList.findByPk(productId);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// update a product by ID
router.put('/products/:id', async (req, res) => {
  const productId = req.params.id;
  const { ProductName, Price, TopRated, SpecialOffer, BestSeller, Reviews } = req.body;
  try {
    const product = await ProductList.findByPk(productId);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      await product.update({
        ProductName,
        Price,
        TopRated,
        SpecialOffer,
        BestSeller,
        Reviews
      });
      res.json(product);
    }
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// delete a product by ID
router.delete('/products/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await ProductList.findByPk(productId);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      await product.destroy();
      res.status(204).send();
    }
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
