let inventory = [

{
product:"Milk",
stock:120,
warehouse:"Main Warehouse"
},

{
product:"Bread",
stock:8,
warehouse:"City Warehouse"
},

{
product:"Eggs",
stock:0,
warehouse:"Main Warehouse"
}

]

let warehouses = ["Main Warehouse","City Warehouse"]

renderInventory()

function renderInventory(){

let table=document.getElementById("stockTable")

table.innerHTML=`

<tr>
<th>Product</th>
<th>Stock</th>
<th>Warehouse</th>
</tr>

`

let low=document.getElementById("lowStock")
let out=document.getElementById("outStock")

low.innerHTML=""
out.innerHTML=""

inventory.forEach(p=>{

table.innerHTML+=`

<tr>
<td>${p.product}</td>
<td>${p.stock}</td>
<td>${p.warehouse}</td>
</tr>

`

if(p.stock<10 && p.stock>0){

low.innerHTML+=`<li>${p.product} - Low Stock (${p.stock})</li>`

}

if(p.stock==0){

out.innerHTML+=`<li>${p.product} - Out Of Stock</li>`

}

})

renderWarehouses()

}

function renderWarehouses(){

let list=document.getElementById("warehouseList")

list.innerHTML=""

warehouses.forEach(w=>{

list.innerHTML+=`<li>${w}</li>`

})

}

function addWarehouse(){

let name=document.getElementById("warehouseName").value

if(name){

warehouses.push(name)

renderWarehouses()

}

}