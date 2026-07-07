const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".Menu-Horizontal");
btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
