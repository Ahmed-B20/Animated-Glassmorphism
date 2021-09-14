// start animated background
function createBox() {
  let span = document.createElement("span");
  let up = document.querySelector(".gradient-background");
  let size = Math.random() * 80;

  span.classList.add("animated-box");
  span.style.width = 40 + size + "px";
  span.style.height = 40 + size + "px";

  span.style.top = Math.random() * innerHeight + "px";
  span.style.left = Math.random() * innerWidth + "px";

  up.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 3000);
}

setInterval(createBox, 400);
// end animated background

// start header toggle
let nav = document.querySelector(".nav");
let navToggle = document.getElementById("menu-btn");
let links = document.querySelectorAll(".one");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  navToggle.classList.toggle("fa-times");
});

window.onscroll = function () {
  nav.classList.remove("active");
  navToggle.classList.remove("fa-times");
};

links.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".one.active").classList.remove("active");
    link.classList.add("active");
  });
});
// end header toggle
