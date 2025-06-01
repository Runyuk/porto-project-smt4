
const hamburger = document.querySelector(".hamburger-menu");
const menu = document.querySelector("ul.menu");
const iconBars = hamburger.querySelector(".fa-bars");
const iconX = hamburger.querySelector(".fa-xmark");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  iconBars.classList.toggle("hidden");
  iconX.classList.toggle("hidden");
});
