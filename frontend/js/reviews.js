loadReviews()

function loadReviews(){

let table=document.getElementById("reviewTable")

table.innerHTML=`

<tr>
<th>User</th>
<th>Product</th>
<th>Rating</th>
<th>Review</th>
<th>Action</th>
</tr>

<tr>
<td>Rahul</td>
<td>Milk</td>
<td>⭐⭐⭐⭐⭐</td>
<td>Very good product</td>
<td>
<button onclick="replyReview()">Reply</button>
<button onclick="deleteReview(this)">Delete</button>
</td>
</tr>

<tr>
<td>Amit</td>
<td>Bread</td>
<td>⭐⭐⭐</td>
<td>Average quality</td>
<td>
<button onclick="replyReview()">Reply</button>
<button onclick="deleteReview(this)">Delete</button>
</td>
</tr>

<tr>
<td>Priya</td>
<td>Eggs</td>
<td>⭐⭐⭐⭐</td>
<td>Fresh eggs</td>
<td>
<button onclick="replyReview()">Reply</button>
<button onclick="deleteReview(this)">Delete</button>
</td>
</tr>

`

}

function deleteReview(btn){

btn.parentElement.parentElement.remove()

}

function replyReview(){

let reply=prompt("Enter reply to customer")

if(reply){

alert("Reply sent: "+reply)

}

}