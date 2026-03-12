loadNotifications()

function loadNotifications(){

orderAlerts()
offerAlerts()

}

function sendSMS(){

let msg=document.getElementById("smsText").value

document.getElementById("smsStatus").innerText="SMS Sent: "+msg

}

function sendEmail(){

let msg=document.getElementById("emailText").value

document.getElementById("emailStatus").innerText="Email Sent: "+msg

}

function sendPush(){

let msg=document.getElementById("pushText").value

document.getElementById("pushStatus").innerText="Push Notification Sent: "+msg

}

function orderAlerts(){

let list=document.getElementById("orderAlerts")

list.innerHTML=`

<li>New Order #1001</li>
<li>Order #1002 Shipped</li>
<li>Order #1003 Delivered</li>

`

}

function offerAlerts(){

let list=document.getElementById("offerAlerts")

list.innerHTML=`

<li>Festival Offer Live</li>
<li>Flat 20% Discount Today</li>
<li>Buy 1 Get 1 Offer</li>

`

}