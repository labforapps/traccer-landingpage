$(document).ready(function () {

  var divsToHide = document.getElementById("alert");
  var alertdanger = document.getElementById("alertdanger");
  alertdanger.style.display = "none";
  intropage()
});

function intropage() {
  setTimeout(function () {
    // $(".introPage").fadeOut();
    $(".mainPage").fadeIn();
  }, 3250);
}
function register() {

  var Email = $("#Email").val();
  var Name = $("#Complete-name").val();
  var Phone = $("#contact-phone").val();
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
    setTimeout(function() {
      $('#MessageAccount').modal('show');
    }, 500);

    $('#Email').val('');
    $('#Complete-name').val('');
    $('#contact-phone').val('');
  }
  else {
    alertdanger.style.display = "block";
    setTimeout(function () {
      alertdanger.style.display = "none";
    }, 4000);
  }
}