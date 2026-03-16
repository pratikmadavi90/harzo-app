loadAnalytics()

function loadAnalytics(){

salesReport()
productPerformance()
orderStats()
revenueChart()

}

function salesReport(){

let table=document.getElementById("salesReport")

table.innerHTML=`

<tr>
<th>Date</th>
<th>Sales</th>
</tr>

<tr>
<td>10 Mar</td>
<td>₹45,000</td>
</tr>

<tr>
<td>11 Mar</td>
<td>₹52,000</td>
</tr>

<tr>
<td>12 Mar</td>
<td>₹60,000</td>
</tr>

`

}

function productPerformance(){

let table=document.getElementById("productReport")

table.innerHTML=`

<tr>
<th>Product</th>
<th>Orders</th>
</tr>

<tr>
<td>Milk</td>
<td>120</td>
</tr>

<tr>
<td>Bread</td>
<td>90</td>
</tr>

<tr>
<td>Eggs</td>
<td>70</td>
</tr>

`

}

function orderStats(){

document.getElementById("totalOrders").innerText="540"
document.getElementById("deliveredOrders").innerText="480"
document.getElementById("pendingOrders").innerText="60"

}

function revenueChart(){

const ctx=document.getElementById('revenueChart')

new Chart(ctx,{

type:'bar',

data:{

labels:['Jan','Feb','Mar','Apr','May'],

datasets:[{

label:'Revenue',

data:[30000,45000,60000,55000,70000],

backgroundColor:'green'

}]

}

})

}