$(document).ready(function(){
var user={
  	 'Name': 'kenji',
         'Email': 'kensuka21@gmail.com'
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