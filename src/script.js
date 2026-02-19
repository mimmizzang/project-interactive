import Swiper from "swiper";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";

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

new Swiper(".main-swiper", {
  modules: [Navigation, FreeMode],
  slidesPerView: "auto",
  spaceBetween: 20,
  freeMode: {
    enabled: true,
    sticky: true,
  },
  grabCursor: true,
  resistanceRatio: 0,
  navigation: {
    nextEl: ".swiper-next-btn",
    prevEl: ".swiper-prev-btn",
  },
  breakpoints: {
    768: {
      spaceBetween: 40,
    },
  },
});
