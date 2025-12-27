// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
