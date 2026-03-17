function saveStore(){

let name=document.getElementById("storeName").value

document.getElementById("storeDisplay").innerText="Store Name: "+name

}

function uploadLogo(){

let file=document.getElementById("logoUpload").files[0]

let reader=new FileReader()

reader.onload=function(e){

document.getElementById("logoPreview").src=e.target.result

}

reader.readAsDataURL(file)

}

function saveContact(){

let phone=document.getElementById("phone").value
let email=document.getElementById("email").value

document.getElementById("contactDisplay").innerText=
"Phone: "+phone+" | Email: "+email

}

function saveCurrency(){

let currency=document.getElementById("currency").value

document.getElementById("currencyDisplay").innerText=
"Selected Currency: "+currency

}

function saveTax(){

let gst=document.getElementById("gst").value

document.getElementById("taxDisplay").innerText=
"GST: "+gst+"%"

}