document.addEventListener("DOMContentLoaded", () => {
  const EMPTY_HEART = "♡";
  const FULL_HEART = "♥";

  const hearts = document.querySelectorAll(".like-glyph");

  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          if (heart.textContent === EMPTY_HEART) {
            heart.textContent = FULL_HEART;
            heart.classList.add("activated-heart");
          } else {
            heart.textContent = EMPTY_HEART;
            heart.classList.remove("activated-heart");
          }
        })
        .catch(() => {
          alert("Server error. Please try again later.");
        });
    });
  });
});

// Simulates server delay and random failure
function mimicServerCall(_url = "http://mimicServer.example.com", _config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      const isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
