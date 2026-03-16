let orders = [

{
id:"#1001",
customer:"Rahul",
amount:450,
payment:"Paid",
status:"Processing",
tracking:"Preparing"
},

{
id:"#1002",
customer:"Amit",
amount:230,
payment:"Pending",
status:"Pending",
tracking:"Not Shipped"
},

{
id:"#1003",
customer:"Priya",
amount:890,
payment:"Paid",
status:"Shipped",
tracking:"In Transit"
}

]

renderOrders()

function renderOrders(){

let table=document.getElementById("orderTable")

table.innerHTML=`

<tr>

<th>Order ID</th>
<th>Customer</th>
<th>Amount</th>
<th>Payment</th>
<th>Status</th>
<th>Tracking</th>
<th>Actions</th>

</tr>

`

orders.forEach((o,i)=>{

table.innerHTML+=`

<tr>

<td>${o.id}</td>

<td>${o.customer}</td>

<td>₹${o.amount}</td>

<td>${o.payment}</td>

<td>

<select onchange="updateStatus(${i},this.value)">

<option ${o.status=="Pending"?"selected":""}>Pending</option>

<option ${o.status=="Processing"?"selected":""}>Processing</option>

<option ${o.status=="Shipped"?"selected":""}>Shipped</option>

<option ${o.status=="Delivered"?"selected":""}>Delivered</option>

</select>

</td>

<td>${o.tracking}</td>

<td>

<button onclick="refundOrder(${i})">Refund</button>

</td>

</tr>

`

})

}

function updateStatus(i,status){

orders[i].status=status

alert("Order status updated")

}

function refundOrder(i){

orders[i].status="Refunded"

orders[i].payment="Refunded"

renderOrders()

}

function searchOrder(){

let input=document.getElementById("searchOrder").value.toLowerCase()

let rows=document.querySelectorAll("#orderTable tr")

rows.forEach(row=>{

if(row.innerText.toLowerCase().includes(input)){

row.style.display=""

}else{

row.style.display="none"

}

})

}