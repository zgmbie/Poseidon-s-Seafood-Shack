"use strict";

/////////////////////////////////////////////////

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

//////////////////////////  model window ////////////////////////////////

const sectionModel = document.querySelector(".section-model");
const overlay = document.querySelector(".overlay");
const btnOpenModel = document.querySelectorAll(".btn-openModel");
const closeOpenModel = document.querySelectorAll(".btn-closeModel");

const openModel = function () {
  sectionModel.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModel = function () {
  sectionModel.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModel.forEach((btn) => btn.addEventListener("click", openModel));
closeOpenModel.forEach((btn) => btn.addEventListener("click", closeModel));

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModel();
  }
});

//////////////////////////// button scroll //////////////////////////////

const learnMore = document.querySelector(".learn-more");
const sectionHow = document.querySelector("#section-2");

learnMore.addEventListener("click", function () {
  const sectionHow_coords = sectionHow.getBoundingClientRect();

  window.scrollTo({
    left: sectionHow_coords.left + pageXOffset,
    top: sectionHow_coords.top + pageYOffset,
    behavior: "smooth",
  });

  // sectionHow.scrollIntoView({
  //   behavior:"smooth",
  // })
});

/////////////////////////// nav scroll ///////////////////////////////

const navLinks = document.querySelector(".nav_links");

navLinks.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav_link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

///////////////////////////////////////////  menu fade animation /////////////////////////////////////////////////////////////

const header = document.querySelector(".navbar");

const handleHover = function (e, opacity) {
  if (e.target.classList.contains("nav_link")) {
    const link = e.target;
    const siblings = link.closest(".navbar").querySelectorAll(".nav_link");
    const logo = link.closest(".navbar").querySelector(".brand-title");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

header.addEventListener("mouseover", function (e) {
  handleHover(e, 0.5);
});

header.addEventListener("mouseout", function (e) {
  handleHover(e, 1);
});
