const openBtn = document.querySelector("#open-menu");
const closeBtn = document.querySelector("#close-menu");
const mobileMenu = document.querySelector("#mobile-menu");

openBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  document.body.style.overflow = "";
});
