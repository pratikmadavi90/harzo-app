const express = require("express")
const router = express.Router()

const Product = require("../models/product")

// GET all products
router.get("/",async(req,res)=>{

try{

const products = await Product.find()

res.json(products)

}catch(err){

res.status(500).json(err)

}

})


// ADD product
router.post("/",async(req,res)=>{

try{

const product = new Product({

name:req.body.name,
variant:req.body.variant,
category:req.body.category,
price:req.body.price,
stock:req.body.stock,
image:req.body.image

})

await product.save()

res.json(product)

}catch(err){

res.status(500).json(err)

}

})


// DELETE product
router.delete("/:id",async(req,res)=>{

try{

await Product.findByIdAndDelete(req.params.id)

res.json({message:"Product deleted successfully"})

}catch(err){

res.status(500).json(err)

}

})

module.exports = router