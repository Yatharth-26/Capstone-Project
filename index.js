const loginBtn = document.querySelector(".login-btn");
const emailInput = document.querySelector("input[type='text']");
const passwordInput = document.querySelector("input[type='password']");

loginBtn.addEventListener("click", function(event) {
  event.preventDefault();
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Please fill all fields.");
  } else {
    window.location.href = "home.html";
  }
});
