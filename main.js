"use strict";

const burger = document.querySelector(".hamburger");
const ul = document.querySelector(".nav-items ul");
const backToTop = document.querySelector(".backToTop");
const btns = document.querySelector(".buttons");

burger.addEventListener("click", function () {
  burger.classList.toggle("is-active");
  ul.classList.toggle("collapseUl");
  btns.style.transition = "all 0.5s";
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    ul.classList.remove("collapseUl");
    burger.classList.remove("is-active");
    btns.style.transition = "none";
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 90) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
