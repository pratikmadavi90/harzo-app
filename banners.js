loadBanners()

function loadBanners(){

}

function addBanner(){

let title=document.getElementById("bannerTitle").value
let type=document.getElementById("bannerType").value

let li=document.createElement("li")

li.innerHTML=title+" ("+type+") <button onclick='editBanner(this)'>Edit</button> <button onclick='deleteBanner(this)'>Delete</button>"

document.getElementById("bannerList").appendChild(li)

}

function editBanner(btn){

let li=btn.parentElement

let newTitle=prompt("Edit Banner Name")

if(newTitle){

li.childNodes[0].nodeValue=newTitle+" "

}

}

function deleteBanner(btn){

btn.parentElement.remove()

}

function addFeatured(){

let product=document.getElementById("productName").value

let li=document.createElement("li")

li.innerText=product

document.getElementById("featuredList").appendChild(li)

}