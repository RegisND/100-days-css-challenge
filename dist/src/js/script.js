const challenges = document.getElementById("challenges");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const challenge = document.querySelectorAll("#challenges iframe");

let idx = 0;

function changeChallenge() {
  if (idx > challenge.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = challenge.length - 1;
  }

  challenges.style.transform = `translateX(${-idx * 400}px)`;
}

leftBtn.addEventListener("click", () => {
  idx--;
  changeChallenge();
});

rightBtn.addEventListener("click", () => {
  idx++;
  changeChallenge();
});
