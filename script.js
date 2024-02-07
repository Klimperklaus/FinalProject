const hoverSound = document.getElementById("hover-sound");
const clickSound = document.getElementById("click-sound");
const nav = document.querySelector(".nav");

nav.addEventListener("mouseenter", function () {
  hoverSound.play(), false;
});

nav.addEventListener("click", function () {
  clickSound.play(), false;
});
