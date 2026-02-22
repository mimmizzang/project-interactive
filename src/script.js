import { gsap } from "gsap";
import Swiper from "swiper";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";

/*모바일 메뉴 클릭 효과*/
const openBtn = document.querySelector("#open-menu");
const closeBtn = document.querySelector("#close-menu");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileLinks = mobileMenu.querySelectorAll("nav a");

openBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

const closeMenu = () => {
  mobileMenu.classList.add("hidden");
  document.body.style.overflow = "";
};

closeBtn.addEventListener("click", closeMenu);

mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

/*main gsap 효과*/
const tl = gsap.timeline({
  defaults: {
    opacity: 1,
    y: 0,
    ease: "power4.out",
    duration: 1,
  },
});

tl.fromTo(".main-sub", { opacity: 0, y: 40 }, {})
  .fromTo(".main-title", { opacity: 0, y: 80 }, { duration: 1.2 }, "-=0.8")
  .fromTo(
    ".main-btn",
    { opacity: 0, y: 40 },
    {
      stagger: 0.15,
      onComplete: () => {
        gsap.set(".main-btn", { clearProps: "transform" });
      },
    },
    "-=0.9",
  );

/*main 버튼 hover 효과*/
const buttons = document.querySelectorAll(".main-btn");

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power2.out", overwrite: "auto" });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out", overwrite: "auto" });
  });
});

/*collection silde 효과*/
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
