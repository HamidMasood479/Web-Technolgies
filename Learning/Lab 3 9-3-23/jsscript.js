function checkLogin() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var button = document.getElementById("loginbtn");
  if (username.value && password.value) {
    username.classList.remove("error");
    password.classList.remove("error");
    username.classList.add("success");
    password.classList.add("success");
    button.classList.remove("errorbutton");
  } else {
    username.classList.remove("success");
    password.classList.remove("success");
    username.classList.add("error");
    password.classList.add("error");
    button.classList.add("errorbutton");
  }
}
