const express = require("express");
const router = express.Router();
const Category = require("../models/category");


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


// UPDATE category (EDIT)
router.put("/:id", async (req, res) => {

const category = await Category.findByIdAndUpdate(

req.params.id,

req.body,

{ new: true }

);

res.json(category);

});


// DELETE category
router.delete("/:id", async (req, res) => {

await Category.findByIdAndDelete(req.params.id);

res.json({ message: "Category Deleted" });

});


module.exports = router;