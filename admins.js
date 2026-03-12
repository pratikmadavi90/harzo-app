loadAdmins()

function loadAdmins(){

renderAdmins()

}

let admins=[]

function addAdmin(){

let name=document.getElementById("adminName").value
let email=document.getElementById("adminEmail").value
let role=document.getElementById("adminRole").value

let admin={name,email,role}

admins.push(admin)

logActivity(name+" added as "+role)

renderAdmins()

}

function renderAdmins(){

let table=document.getElementById("adminTable")

table.innerHTML=`

<tr>
<th>Name</th>
<th>Email</th>
<th>Role</th>
<th>Action</th>
</tr>

`

admins.forEach((a,i)=>{

table.innerHTML+=`

<tr>

<td>${a.name}</td>
<td>${a.email}</td>
<td>${a.role}</td>

<td>
<button onclick="removeAdmin(${i})">Remove</button>
</td>

</tr>

`

})

}

function removeAdmin(i){

let name=admins[i].name

admins.splice(i,1)

logActivity(name+" removed")

renderAdmins()

}

function logActivity(msg){

let li=document.createElement("li")

li.innerText=msg

document.getElementById("activityLogs").appendChild(li)

}