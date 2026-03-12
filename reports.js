loadReports()

function loadReports(){

dailyOrders()
salesReport()
userReport()
paymentReport()

}

function dailyOrders(){

let table=document.getElementById("dailyOrders")

table.innerHTML=`

<tr>
<th>Date</th>
<th>Total Orders</th>
</tr>

<tr>
<td>10 Mar</td>
<td>120</td>
</tr>

<tr>
<td>11 Mar</td>
<td>150</td>
</tr>

<tr>
<td>12 Mar</td>
<td>170</td>
</tr>

`

}

function salesReport(){

let table=document.getElementById("salesReport")

table.innerHTML=`

<tr>
<th>Date</th>
<th>Total Sales</th>
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

function userReport(){

let table=document.getElementById("userReport")

table.innerHTML=`

<tr>
<th>Date</th>
<th>New Users</th>
</tr>

<tr>
<td>10 Mar</td>
<td>25</td>
</tr>

<tr>
<td>11 Mar</td>
<td>30</td>
</tr>

<tr>
<td>12 Mar</td>
<td>40</td>
</tr>

`

}

function paymentReport(){

let table=document.getElementById("paymentReport")

table.innerHTML=`

<tr>
<th>Payment Method</th>
<th>Total Transactions</th>
</tr>

<tr>
<td>UPI</td>
<td>120</td>
</tr>

<tr>
<td>Card</td>
<td>80</td>
</tr>

<tr>
<td>Cash</td>
<td>40</td>
</tr>

`

}