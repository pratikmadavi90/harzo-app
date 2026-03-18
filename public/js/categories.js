const BASE_URL = window.location.hostname === "localhost"
  ? "http://localhost:5000"
  : "https://harzo-app.onrender.com"

let categories = []

function showCategoryForm(){
  document.getElementById("categoryForm").style.display = "block"
}

// ADD CATEGORY
async function addCategory(){

let name = document.getElementById("categoryName").value
let sub = document.getElementById("subcategoryName").value

console.log("Button clicked")

try{

const response = await fetch(`${BASE_URL}/api/categories/add`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: name,
    subcategory: sub
  })
})

const data = await response.json()

alert("Category Added Successfully ✅")

loadCategories()

document.getElementById("categoryName").value = ""
document.getElementById("subcategoryName").value = ""

}catch(err){
  console.log("Error:", err)
  alert("Error adding category ❌")
}

}


// SHOW CATEGORIES
function renderCategories(){

let table = document.getElementById("categoryTable")

table.innerHTML = `
<tr>
<th>Category Name</th>
<th>Subcategory</th>
<th>Image</th>
<th>Actions</th>
</tr>
`

categories.forEach((c,i)=>{

table.innerHTML += `
<tr>
<td>${c.name}</td>
<td>${c.subcategory}</td>
<td><img src="${c.image}" width="50"></td>
<td>
<button onclick="editCategory(${i})">Edit</button>
<button onclick="deleteCategory(${i})">Delete</button>
</td>
</tr>
`

})

}


// DELETE (LOCAL ONLY)
function deleteCategory(i){
categories.splice(i,1)
renderCategories()
}


// EDIT
function editCategory(i){

let c = categories[i]

document.getElementById("categoryName").value = c.name
document.getElementById("subcategoryName").value = c.subcategory

}


// LOAD FROM BACKEND
async function loadCategories(){

try{

const response = await fetch(`${BASE_URL}/api/categories`)
const data = await response.json()

categories = data

renderCategories()

}catch(err){
  console.log("Error loading categories:", err)
}

}


window.onload = loadCategories