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

if (sideNav) {
  sideNavBtn.addEventListener("click", () => {
    sideNav.classList.toggle("active");
  });

  sideNavCloseBtn.addEventListener("click", () => {
    sideNav.classList.remove("active");
  });
}

// sticky-nav
let lastScrollTop = 0;

let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  let scrollTop = window.pageXOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.top = "-190px";
  } else {
    header.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// dropDown
const dropDownBtn = document.querySelectorAll("#dropDownBtn");
const dropDown = document.querySelectorAll("#dropDown");

dropDownBtn.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    dropDown[idx].classList.toggle("active");
  });
});

// Hignlight Link
const navLink = document.querySelectorAll("#navLink");
const linkBtn = document.querySelectorAll("#linkBtn");
const pathname = location.pathname;

let filterPathname = pathname;
filterPathname = filterPathname.replace(/.html/, "");
filterPathname = filterPathname.replace("/", "");

// filterPathname = filterPathname.replace("{% url '", "");
// filterPathname = filterPathname.replace("' %}", "");

navLink.forEach((link, idx) => {
  let url = link.getAttribute("href");
  filterUrl = url.replace("{% url '", "");
  filterUrl = url.replace("' %}", "");
  // filterUrl = url.replace(".html", "");

  if (filterPathname === filterUrl) {
    if (`${filterUrl}.html` === url) {
      linkBtn[idx].classList.add("active");
    }
  }
});

const button = document.querySelectorAll("button");

button.forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.classList.add("animate");
  });

  btn.addEventListener("mouseup", () => {
    btn.classList.remove("animate");
  });

  btn.addEventListener("mouseout", () => {
    btn.classList.remove("animate");
  });
});

// let url = navLink[1].getAttribute("href");
// filterUrl = url.replace("{% url '", "");
// filterUrl = filterUrl.replace("' %}", "");

// console.log(filterUrl);

// console.log(filterPathname);

const filterDatas = document.querySelectorAll("#filterData");

filterDatas.forEach((filterData, idx) => {
  const btns = filterData.querySelectorAll("#btn");
  const items = filterData.querySelectorAll(".boxItem");

  if (btns) {
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let value = e.target.getAttribute("data-filter");

        items.forEach((item) => {
          const itemValue = item.getAttribute("id");

          $(btn).addClass("active").siblings().removeClass("active");

          if (itemValue === value) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }

          if (value === "all") {
            item.classList.add("active");
          }
        });
      });

      items.forEach((item) => {
        value = btns[0].getAttribute("data-filter");
        itemValue = item.getAttribute("id");

        if (value === "all") {
          item.classList.add("active");
        }

        if (itemValue === value) {
          item.classList.add("active");
        }
      });
    });
  }
});

const popUp = document.querySelector(".image-popup");
const popUpImage = document.querySelectorAll(".image-popup .img");
const imageBtn = document.querySelector(".details-image");
const popUpClose = document.querySelector(".close-popup");

if (popUp) {
  imageBtn.addEventListener("click", () => {
    imageUrl = imageBtn.getAttribute("src");
    fileType = imageBtn.getAttribute("data-pdf");

    if (fileType) {
      popUpImage[1].setAttribute("src", imageUrl);
      popUpImage[0].style.height = "0px";
      popUpImage[1].style.height = "100%";
    } else {
      popUpImage[0].setAttribute("src", imageUrl);
      popUpImage[1].style.height = "0px";
      popUpImage[0].style.height = "100%";
    }
    popUp.classList.add("active");
  });

  popUpClose.addEventListener("click", () => {
    popUpImage.forEach((image) => {
      image.removeAttribute("src");
    });
    popUp.classList.remove("active");
  });
}

// const sideInformationBtn = document.querySelector(".side-information-btn");
// const sideInformation = document.querySelector(".side-information");
// const sideInformationClose = document.querySelector(".side-information-close");

// sideInformationBtn.addEventListener("click", () => {
//   sideInformation.classList.add("active");
// });

// sideInformationClose.addEventListener("click", () => {
//   sideInformation.classList.remove("active");
// });
