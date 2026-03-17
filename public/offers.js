let offers = []

function showOfferForm(){

document.getElementById("offerForm").style.display="block"

}

function addOffer(){

let code=document.getElementById("couponCode").value
let type=document.getElementById("discountType").value
let value=document.getElementById("discountValue").value

let offer={
code,
type,
value,
usage:0
}

offers.push(offer)

renderOffers()

}

function renderOffers(){

let table=document.getElementById("offerTable")

table.innerHTML=`

<tr>
<th>Coupon Code</th>
<th>Type</th>
<th>Value</th>
<th>Usage</th>
<th>Action</th>
</tr>

`

offers.forEach((o,i)=>{

table.innerHTML+=`

<tr>

<td>${o.code}</td>

<td>${o.type}</td>

<td>${o.value}</td>

<td>${o.usage}</td>

<td>

<button onclick="deleteOffer(${i})">Delete</button>

</td>

</tr>

`

})

document.getElementById("totalCoupons").innerText=offers.length

let usageTotal=0

offers.forEach(o=>usageTotal+=o.usage)

document.getElementById("totalUsage").innerText=usageTotal

}

function deleteOffer(i){

offers.splice(i,1)

renderOffers()

}