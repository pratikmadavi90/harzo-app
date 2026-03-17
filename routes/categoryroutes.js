const express = require("express");
const router = express.Router();
const Category = require("./categoryModel");

// GET all categories
router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

// ADD category
router.post("/add", async (req, res) => {
  const category = new Category(req.body);
  await category.save();
  res.json(category);
});

module.exports = router;