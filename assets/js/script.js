// galleryPopup
const galleryBtns = document.querySelectorAll("#galleryBtn");
const galleryPopup = document.querySelector(".gallery-popup");
const galleryClose = document.querySelector(".close-gallery-btn");
const galleryBg = document.querySelector(".gallery-bg");

if (galleryBtns && galleryPopup && galleryClose && galleryBg) {
  galleryBtns.forEach((galleryBtn) => {
    galleryBtn.addEventListener("click", () => {
      galleryPopup.classList.add("active");
    });
  });

  galleryClose.addEventListener("click", () => {
    galleryPopup.classList.remove("active");
  });

  galleryBg.addEventListener("click", () => {
    galleryPopup.classList.remove("active");
  });
}

// sideNav
const sideNav = document.querySelector(".side-nav");
const sideNavBtn = document.querySelector(".side-nav-btn");
const sideNavCloseBtn = document.querySelector(".side-nav-close-btn");

sideNavBtn.addEventListener("click", () => {
  sideNav.classList.toggle("active");
});

sideNavCloseBtn.addEventListener("click", () => {
  sideNav.classList.remove("active");
});

// sticky-nav
let lastScrollTop = 0;

let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  let scrollTop = window.pageXOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.top = "-150px";
  } else {
    header.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
