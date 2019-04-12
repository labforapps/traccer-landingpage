$(document).ready(function () {

  var divsToHide = document.getElementById("alert");
  var alertdanger = document.getElementById("alertdanger");
  alertdanger.style.display = "none";
});
function register() {

  var Email = document.getElementById("Email").value;
  var Name = document.getElementById("Complete-name").value;
  var Phone = document.getElementById("contact-phone").value;
  var alertdanger = document.getElementById("alertdanger");

  alertdanger.style.display = "none";
  if (Email != "" && Name != "" && Phone != "") {
    var user = {
      'Name': Name,
      'Email': Email,
      'Telephone': Phone
    };

    $.ajax({
      url: "http://localhost:55799/api/User",
      type: "POST",
      data: JSON.stringify(user),
      contentType: "application/json",
      success: function (data) {
        alertdanger.style.display = "none";

      }
    });
    $('#register-user').modal('hide');
    $('#MessageAccount').modal('show');
  }
  else {
    alertdanger.style.display = "block";
    setTimeout(function () {
      alertdanger.style.display = "none";
    }, 4000);
  }
}
