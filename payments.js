loadPayments()

function loadPayments(){

totalRevenue()
paymentMethods()
gstInvoices()
salesReport()

}

function totalRevenue(){

document.getElementById("revenue").innerHTML="₹1,25,000"

}

function paymentMethods(){

document.getElementById("upi").innerHTML="₹50,000"

document.getElementById("razorpay").innerHTML="₹40,000"

document.getElementById("cod").innerHTML="₹35,000"

}

function gstInvoices(){

let table=document.getElementById("invoiceTable")

table.innerHTML=`

<tr>
<th>Invoice ID</th>
<th>Customer</th>
<th>Amount</th>
<th>GST</th>
</tr>

<tr>
<td>#INV101</td>
<td>Rahul</td>
<td>₹500</td>
<td>₹90</td>
</tr>

<tr>
<td>#INV102</td>
<td>Amit</td>
<td>₹800</td>
<td>₹144</td>
</tr>

<tr>
<td>#INV103</td>
<td>Priya</td>
<td>₹650</td>
<td>₹117</td>
</tr>

`

}

function salesReport(){

let table=document.getElementById("salesTable")

table.innerHTML=`

<tr>
<th>Date</th>
<th>Total Orders</th>
<th>Total Sales</th>
</tr>

<tr>
<td>10 Mar</td>
<td>120</td>
<td>₹45,000</td>
</tr>

<tr>
<td>11 Mar</td>
<td>140</td>
<td>₹52,000</td>
</tr>

<tr>
<td>12 Mar</td>
<td>170</td>
<td>₹60,000</td>
</tr>

`

}