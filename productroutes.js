const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADD product
router.post("/add", async (req, res) => {
  try {
    console.log("BODY:", req.body) // debug

    const { name, variant, price, stock, image } = req.body

    if (!name || !price) {
      return res.status(400).json({ error: "Name and price required" })
    }

    const product = new Product({
      name,
      variant,
      price,
      stock,
      image
    })

    await product.save()

    res.json({ message: "Product saved", product })

  } catch (err) {
    console.log("ERROR:", err) // 🔥 important
    res.status(500).json({ error: err.message })
  }
})