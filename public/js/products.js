let products = []

// LOAD PRODUCTS
function loadProducts(){

fetch("https://harzo-app.onrender.com/api/products")

.then(res => res.json())

.then(data => {

products = data

renderProducts()

})

.catch(err => console.log(err))

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
let category = document.getElementById("category").value
let price = document.getElementById("price").value
let stock = document.getElementById("stock").value

fetch("https://harzo-app.onrender.com/api/products", {

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({

name:name,
variant:variant,
category:category,
price:price,
stock:stock,
image:""

})

})

.then(res => res.json())

.then(data => {

console.log("Product Added",data)

loadProducts()

})

.catch(err => console.log(err))

}



// DELETE PRODUCT
function deleteProduct(id){

fetch("https://harzo-app.onrender.com/api/products/"+id,{

method:"DELETE"

})

.then(res => res.json())

.then(data => {

console.log("Deleted",data)

loadProducts()

})

.catch(err => console.log(err))

}



window.onload = loadProducts