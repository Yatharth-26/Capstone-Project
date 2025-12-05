const likeButtons = document.querySelectorAll(".post-actions .action-btn");
likeButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    if (button.textContent.includes("❤️")) {
      let parts = button.textContent.split(" ");
      let likeCount = parseInt(parts[1]);
      likeCount++;
      button.textContent = "❤️ " + likeCount;
    }
  });
});
const followButtons = document.querySelectorAll(".btn-follow");
followButtons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    if (btn.textContent === "Follow") {
      btn.textContent = "Following";
      btn.style.background = "#10b981";
    } 
    else {
      btn.textContent = "Follow";
      btn.style.background = "#3b82f6";
    }
  });
});
