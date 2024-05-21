const mobileBtn = document.querySelector("#mobile-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const autoUpdateYears = document.querySelectorAll(".date");

let currentDate = new Date();

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

autoUpdateYears.forEach((element) => {
  element.textContent = currentDate.getFullYear();
});
