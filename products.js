let products = []
function loadProducts(){

fetch("http://localhost:5000/api/products")

.then(res => res.json())

.then(data => {

products = data
renderProducts()

})

}

function showForm(){
document.getElementById("productForm").style.display="block"
}

function addProduct(){

let name=document.getElementById("name").value
let variant=document.getElementById("variant").value
let price=document.getElementById("price").value
let stock=document.getElementById("stock").value

let product={
name,
variant,
price,
stock
}



products.push(product)

fetch("http://localhost:5000/api/products/add", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: name,
    price: price,
    category: "Fruits",
    stock: stock
  })
})
.then(res => res.json())
.then(data => {
  console.log("Product saved:", data)
})
.catch(err => {
  console.error(err)
})

renderProducts()

}

function renderProducts(){

let table=document.getElementById("productTable")

table.innerHTML=`
<tr>
<th>Name</th>
<th>Variant</th>
<th>Price</th>
<th>Stock</th>
<th>Actions</th>
</tr>
`

products.forEach((p,i)=>{

table.innerHTML += `
<tr>

<td>
<img src="http://localhost:5000/uploads/productimages/${p.frontImage}" width="40">
</td>

<td>${p.name}</td>
<td>${p.variant}</td>
<td>${p.price}</td>
<td>${p.stock}</td>

<td>
<button onclick="editProduct(${i})">Edit</button>
<button onclick="deleteProduct(${i})">Delete</button>
</td>

</tr>
`

})

}

function deleteProduct(i){

products.splice(i,1)

renderProducts()

}

function editProduct(i){

let p=products[i]

document.getElementById("name").value=p.name
document.getElementById("variant").value=p.variant
document.getElementById("price").value=p.price
document.getElementById("stock").value=p.stock

}

function searchProduct(){

let input=document.getElementById("search").value.toLowerCase()

let rows=document.querySelectorAll("#productTable tr")

rows.forEach(row=>{

if(row.innerText.toLowerCase().includes(input)){

row.style.display=""

}else{

row.style.display="none"

}

})

}
window.onload = loadProducts