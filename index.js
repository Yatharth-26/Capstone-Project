// Select elements
const loginBtn = document.querySelector(".login-btn");
const emailInput = document.querySelector("input[type='text']");
const passwordInput = document.querySelector("input[type='password']");

// When login button is clicked
loginBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Stop instant redirect

  // Check if fields are empty
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Please fill all fields.");
  } else {
    // If not empty → go to next page
    window.location.href = "home.html";
  }
});
