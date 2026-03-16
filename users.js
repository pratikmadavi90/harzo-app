let users = [

{
name:"Rahul",
email:"rahul@gmail.com",
phone:"9876543210",
address:"Delhi",
status:"Active"
},

{
name:"Amit",
email:"amit@gmail.com",
phone:"9876541230",
address:"Mumbai",
status:"Active"
},

{
name:"Priya",
email:"priya@gmail.com",
phone:"9876500000",
address:"Nagpur",
status:"Blocked"
}

]

renderUsers()

function renderUsers(){

let table=document.getElementById("userTable")

table.innerHTML=`

<tr>

<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Address</th>
<th>Status</th>
<th>Action</th>

</tr>

`

users.forEach((u,i)=>{

table.innerHTML+=`

<tr>

<td>${u.name}</td>

<td>${u.email}</td>

<td>${u.phone}</td>

<td>${u.address}</td>

<td>${u.status}</td>

<td>

<button onclick="toggleUser(${i})">

${u.status=="Active"?"Block":"Unblock"}

</button>

</td>

</tr>

`

})

}

function toggleUser(i){

if(users[i].status=="Active"){

users[i].status="Blocked"

}else{

users[i].status="Active"

}

renderUsers()

}

function searchUser(){

let input=document.getElementById("searchUser").value.toLowerCase()

let rows=document.querySelectorAll("#userTable tr")

rows.forEach(row=>{

if(row.innerText.toLowerCase().includes(input)){

row.style.display=""

}else{

row.style.display="none"

}

})

}