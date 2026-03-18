const BASE_URL = window.location.hostname === "localhost"
  ? "http://localhost:5000"
  : "https://harzo-app.onrender.com"

let products = []

// LOAD PRODUCTS
function loadProducts(){

fetch(`${BASE_URL}/api/products`)
.then(res => res.json())
.then(data => {
  products = data
  renderProducts()
})
.catch(err => console.log("Error:", err))

}



// SHOW PRODUCTS
function renderProducts(){

let table = document.getElementById("productTable")

if(!table) return

table.innerHTML = `
<tr>
<th>Image</th>
<th>Name</th>
<th>Variant</th>
<th>Category</th>
<th>Price</th>
<th>Stock</th>
<th>Actions</th>
</tr>
`

products.forEach((p,i)=>{

table.innerHTML += `

<tr>

<td>
${p.image ? `<img src="${p.image}" width="40">` : ""}
</td>

<td>${p.name || ""}</td>

<td>${p.variant || ""}</td>

<td>${p.category || ""}</td>

<td>${p.price || ""}</td>

<td>${p.stock || ""}</td>

<td>

<button onclick="deleteProduct('${p._id}')">Delete</button>

</td>

</tr>

`

})

}


// ADD PRODUCT
function addProduct(){

let name = document.getElementById("name").value
let variant = document.getElementById("variant").value
let price = Number(document.getElementById("price").value)
let stock = Number(document.getElementById("stock").value)

fetch(`${BASE_URL}/api/products/add`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: name,
    variant: variant,
    price: price,
    stock: stock,
    image: ""
  })
})
.then(res => res.json())
.then(data => {
  alert("Product Added Successfully ✅")
  loadProducts()

  document.getElementById("name").value = ""
  document.getElementById("variant").value = ""
  document.getElementById("price").value = ""
  document.getElementById("stock").value = ""
})
.catch(err => {
  console.log(err)
  alert("Error adding product ❌")
})

}



// DELETE PRODUCT
function deleteProduct(id){

fetch(`${BASE_URL}/api/products/${id}`, {
  method: "DELETE"
})
.then(res => res.json())
.then(data => {
  console.log("Deleted", data)
  loadProducts()
})
.catch(err => console.log(err))

}



window.onload = loadProducts