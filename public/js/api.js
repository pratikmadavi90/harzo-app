// API connection functions

const BASE_URL = window.location.hostname === "localhost"
  ? "http://localhost:5000/api"
  : "https://harzo-app.onrender.com/api"


// GET PRODUCTS
async function getProducts(){
  try{
    const res = await fetch(`${BASE_URL}/products`)
    const data = await res.json()
    return data
  }catch(err){
    console.log("Error fetching products:", err)
  }
}


// ADD PRODUCT
async function addProductAPI(product){
  try{
    const res = await fetch(`${BASE_URL}/products/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
    const data = await res.json()
    return data
  }catch(err){
    console.log("Error adding product:", err)
  }
}


// DELETE PRODUCT
async function deleteProductAPI(id){
  try{
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE"
    })
    const data = await res.json()
    return data
  }catch(err){
    console.log("Error deleting product:", err)
  }
}