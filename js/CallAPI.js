$(document).ready(function(){

    var Email=document.getElementById("Email").value;
    var Name=document.getElementById("Complete-name").value;
    var Phone=document.getElementById("contact-phone").value;
  
var user={
  	 'Name': Name,
     'Email': Email,
     'Telephone':Phone
   };

   $.ajax({
    url: "http://localhost:55799/api/User",
    type: "POST",
    data: JSON.stringify(user),
    contentType: "application/json",
    success: function (data) {
    }
});
});