function checkPassword(){

var adminPassword="admin932515";

var input=document.getElementById("password").value;

if(input===adminPassword){

window.location="admin.html";

}

else{

document.getElementById("message").innerHTML="Access Denied - Firewall Blocked";

}

}