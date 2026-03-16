const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

name:{
type:String,
required:true
},

variant:{
type:String
},

category:{
type:String
},

price:{
type:Number
},

stock:{
type:Number
},

image:{
type:String
}

})

module.exports = mongoose.model("Product",productSchema)