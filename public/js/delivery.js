loadDelivery()

function loadDelivery(){

refundTable()

}

function addZone(){

let zone=document.getElementById("zoneName").value

let li=document.createElement("li")

li.innerText=zone

document.getElementById("zoneList").appendChild(li)

}

function assignBoy(){

let order=document.getElementById("orderId").value
let boy=document.getElementById("boyName").value

let li=document.createElement("li")

li.innerText="Order "+order+" → "+boy

document.getElementById("assignList").appendChild(li)

}

function setCharge(){

let charge=document.getElementById("charge").value

document.getElementById("chargeDisplay").innerText="Delivery Charge ₹"+charge

}

function setLimit(){

let limit=document.getElementById("limit").value

document.getElementById("limitDisplay").innerText="Free Delivery Above ₹"+limit

}

function refundTable(){

let table=document.getElementById("refundTable")

table.innerHTML=`

<tr>
<th>Order ID</th>
<th>User</th>
<th>Amount</th>
<th>Status</th>
</tr>

<tr>
<td>#1001</td>
<td>Rahul</td>
<td>₹450</td>
<td>Refunded</td>
</tr>

<tr>
<td>#1002</td>
<td>Amit</td>
<td>₹230</td>
<td>Pending</td>
</tr>

<tr>
<td>#1003</td>
<td>Priya</td>
<td>₹890</td>
<td>Settled</td>
</tr>

`

}