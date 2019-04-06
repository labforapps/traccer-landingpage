$(document).ready(function() {

    var divsToHide = document.getElementById("alert");
    var alertdanger= document.getElementById("alertdanger");
    divsToHide.style.display="none";
    alertdanger.style.display="none";
});
function register (){

    var Email=document.getElementById("Email").value;
    var Name=document.getElementById("Complete-name").value;
    var Phone=document.getElementById("contact-phone").value;
    var divsToHide = document.getElementById("alert");
    var alertdanger= document.getElementById("alertdanger");
    
    alertdanger.style.display="none";
  if (Email!="" && Name!=""&& Phone!="" )
  {
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
        divsToHide.style.display="block";
        alertdanger.style.display="none";
      
    }
});
divsToHide.style.display="block";
setTimeout(function() {
$('#register-user').modal('hide');
location.reload();}, 4000);
  }
  else{
    alertdanger.style.display="block";
    setTimeout(function() {
    alertdanger.style.display="none";
}, 4000);
    divsToHide.style.display="none";
  }
}
