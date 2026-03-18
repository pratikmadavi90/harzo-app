const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  name: String,
  variant: String,
  price: Number,
  stock: Number,
  image: String
})

module.exports = mongoose.model("Product", productSchema)