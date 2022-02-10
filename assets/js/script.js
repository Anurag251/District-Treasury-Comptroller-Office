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

const sideNav = document.querySelector(".side-nav");
const sideNavBtn = document.querySelector(".side-nav-btn");
const sideNavCloseBtn = document.querySelector(".side-nav-close-btn");

sideNavBtn.addEventListener("click", () => {
  sideNav.classList.toggle("active");
});

sideNavCloseBtn.addEventListener("click", () => {
  sideNav.classList.remove("active");
});
