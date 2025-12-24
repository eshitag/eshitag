// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Dark mode
const toggleTheme = () => {
  document.documentElement.classList.toggle("dark");
};

document.getElementById("themeToggle").addEventListener("click", toggleTheme);
document
  .getElementById("themeToggleDesktop")
  .addEventListener("click", toggleTheme);
