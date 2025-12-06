document.querySelectorAll(".post-actions .action-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    let likeCount = parseInt(btn.dataset.likes || 0);
    likeCount++;
    btn.dataset.likes = likeCount;
    btn.textContent = `❤️ ${likeCount}`;
  });
});


document.querySelectorAll(".btn-follow").forEach(btn => {
  btn.addEventListener("click", () => {
    const isFollowing = btn.textContent === "Following";
    btn.textContent = isFollowing ? "Follow" : "Following";
    btn.style.background = isFollowing ? "#3b82f6" : "#10b981";
  });
});
