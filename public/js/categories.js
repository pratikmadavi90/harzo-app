let categories = []

function showCategoryForm(){

document.getElementById("categoryForm").style.display="block"

}

async function addCategory(){

let name = document.getElementById("categoryName").value
let sub = document.getElementById("subcategoryName").value

console.log("Button clicked")

const response = await fetch("https://harzo-app.onrender.com/api/categories/add",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name:name,
subcategory:sub
})
})

const data = await response.json()

alert("Category Added Successfully")

loadCategories()

}

function renderCategories(){

let table=document.getElementById("categoryTable")

table.innerHTML=`
<tr>
<th>Category Name</th>
<th>Subcategory</th>
<th>Image</th>
<th>Actions</th>
</tr>
`

categories.forEach((c,i)=>{

table.innerHTML+=`

<tr>

<td>${c.name}</td>

<td>${c.sub}</td>

<td>

<img src="${c.imgURL}" width="50">

</td>

<td>

<button onclick="editCategory(${i})">Edit</button>

<button onclick="deleteCategory(${i})">Delete</button>

</td>

</tr>

`

})

}

function deleteCategory(i){

categories.splice(i,1)

renderCategories()

}

function editCategory(i){

let c=categories[i]

document.getElementById("categoryName").value=c.name
document.getElementById("subcategoryName").value=c.sub

}

async function loadCategories(){

const response = await fetch("https://harzo-app.onrender.com/api/categories")

const data = await response.json()

let table = document.getElementById("categoryTable")

table.innerHTML = `
<tr>
<th>Category Name</th>
<th>Subcategory</th>
<th>Image</th>
<th>Actions</th>
</tr>
`

data.forEach(cat => {

table.innerHTML += `
<tr>
<td>${cat.name}</td>
<td>${cat.subcategory}</td>
<td><img src="${cat.image}" width="50"></td>
<td>Edit | Delete</td>
</tr>
`

})

}

window.onload = loadCategories