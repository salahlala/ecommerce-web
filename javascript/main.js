// swiper slide

var swiper = new Swiper(".mainSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 2600,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//

var swipers = new Swiper(".slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1500,
  // autoplay: {
  //   delay: 2600,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
});

var swiper_two = new Swiper(".slider-2", {
  slidesPerView: 1,
  spaceBetween: 30,
  // loop: true,
  speed: 1500,
  // autoplay: {
  //   delay: 2600,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next-one",
    prevEl: ".swiper-button-prev-two",
  },
});

// start open nav bar btn

let openBtn = document.querySelector(".open-btn");
let closeBtn = document.querySelector(".close");
let navBar = document.querySelector(".links");
let titleLi = document.querySelectorAll(".title");
let liNot = document.querySelectorAll(".flex-box li:not(.title)");
let allUl = document.querySelectorAll(".flex-box ul");

openBtn.addEventListener("click", () => {
  navBar.classList.add("active");
  background.classList.add("active");
  settingIcon.classList.add("disable");
});
closeBtn.addEventListener("click", () => {
  removeNavbar();
  removeBackground();
  settingIcon.classList.remove("disable");
});

function removeNavbar() {
  navBar.classList.remove("active");
}
function removeBackground() {
  background.classList.remove("active");
  settingIcon.classList.remove("disable");
}

let dropDown = document.querySelectorAll(".open-main");
let megaMenu = document.querySelector(".mega-menu");
let subMenu = document.querySelectorAll(".sub-menu");
let openMenu = document.querySelectorAll(".open-menu ");
let subBtn = document.querySelectorAll(".sub i");
let sub_two = document.querySelectorAll(".sub");
let allSub = document.querySelectorAll(".sub-menu");
// subMenu.forEach((sub)=>{
//   sub.addEventListener("click", (e)=>{
//   }
let megaIcon = document.querySelector("i.mega");
let click = true;
subBtn.forEach((btn, id) => {
  btn.addEventListener("click", (e) => {
    if (click) {
      // sub_two.forEach((btn) => btn.classList.remove("active"));
      sub_two[id].classList.add("active");
      subBtn[id].className = "fa-solid fa-minus open-main";
      megaMenu.classList.remove("active");
      megaIcon.className = "fa-solid fa-plus open-main mega";
      click = false;
    } else if (click == false) {
      sub_two.forEach((btn) => btn.classList.remove("active"));
      subBtn[id].className = "fa-solid fa-plus open-main ";

      subBtn.forEach((i) => {
        i.className = "fa-solid fa-plus open-main ";
      });
      click = true;
    }
  });
});

dropDown.forEach((drop) => {
  drop.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("mega")) {
      megaMenu.classList.toggle("active");
      sub_two.forEach((btn) => btn.classList.remove("active"));
      subBtn.forEach((i) => {
        i.className = "fa-solid fa-plus open-main ";
      });
      if (e.currentTarget.classList.contains("fa-plus")) {
        e.currentTarget.className = "fa-solid fa-minus open-main mega";
      } else {
        e.currentTarget.className = "fa-solid fa-plus open-main mega";
        allUl.forEach((ele) => {
          ele.classList.remove("active");
        });
      }
    }
  });
});

let clickUl = true;
let iconUl = document.querySelectorAll(".flex-box li i");

iconUl.forEach((icon, indx) => {
  icon.addEventListener("click", () => {
    if (clickUl) {
      allUl.forEach((el) => {
        el.classList.remove("active");
      });
      allUl[indx].classList.add("active");
      iconUl[indx].className = "fa-solid fa-minus open-main";
      clickUl = false;
    } else if (clickUl == false) {
      clickUl = true;

      allUl.forEach((el) => {
        el.classList.remove("active");
      });
      iconUl.forEach((i) => {
        i.className = "fa-solid fa-plus open-main";
      });
    }
  });
});

let liImg = document.querySelectorAll(".img-show ul li");
let rightImg = document.querySelector(".img-show ul .right");
let leftImg = document.querySelector(".img-show ul .left");

let id = 0;

rightImg.addEventListener("click", (e) => {
  id++;

  if (id > liImg.length - 1) {
    id = 0;
  }
  liImg.forEach((img) => {
    img.classList.remove("active");
  });
  liImg[id].classList.add("active");
});

leftImg.addEventListener("click", (e) => {
  id--;

  if (id < 0) {
    id = liImg.length - 1;
  }
  liImg.forEach((img) => {
    img.classList.remove("active");
  });
  liImg[id].classList.add("active");
});

// start filter section

let filterBtn = document.querySelectorAll(".filter-btn ul li");
let allImg = document.querySelectorAll(".img-details img.active");
let boxImg = document.querySelectorAll(".content-img .box");
let hoverImg = document.querySelectorAll(".img-details img.hover-img");
filterBtn.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    filterBtn.forEach((x) => {
      x.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    let selectMenu = document.querySelectorAll(
      e.currentTarget.dataset.category
    );
    boxImg.forEach((box) => {
      box.classList.add("hid");
      box.classList.remove("motion");
    });
    selectMenu.forEach((e) => {
      e.classList.remove("hid");
      setTimeout(() => {
        e.classList.add("motion");
      }, 50);
    });
  });
});

boxImg.forEach((e, id) => {
  e.addEventListener("mouseenter", (box) => {
    let curImg = box.currentTarget.querySelector(".img-details img.active");
    let hovImg = box.currentTarget.querySelector(".img-details img.hover-img");

    if (hovImg) {
      curImg.classList.remove("active");
      hovImg.classList.add("active");
    }
  });

  e.addEventListener("mouseleave", (box) => {
    let curImg = box.currentTarget.querySelector(".img-details > img");
    let hovImg = box.currentTarget.querySelector(".img-details img.hover-img");

    if (hovImg) {
      curImg.classList.add("active");
      hovImg.classList.remove("active");
    }
  });
});

let heartIcon = document.querySelectorAll("i.heart");

heartIcon.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
  });
});

let showCustom = document.querySelectorAll(".show-content");
let imgCustom = document.querySelector(".back-detail img");
let mainCustom = document.querySelector(".details-product");
let closeCustom = document.querySelector(".details-product .close");
let background = document.querySelector(".background");
let body = document.body;
showCustom.forEach((icon) => {
  icon.addEventListener("click", (i) => {
    let imgSrc = i.currentTarget.dataset.src;
    imgCustom.src = imgSrc;
    // console.log(imgSrc);
    mainCustom.classList.add("active");
    background.classList.add("active");
    body.classList.add("hid");
  });
});
function removeCustom() {
  mainCustom.classList.remove("active");
  body.classList.remove("hid");
}
document.addEventListener("click", (doc) => {
  if (doc.target.classList.contains("details-product")) {
    removeCustom();
    removeBackground();
  }
});

closeCustom.addEventListener("click", () => {
  removeCustom();
  removeBackground();
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    removeCustom();
    removeColorDiv();
    removeNavbar();
    removeBackground();
  }
});

// start input counter
let mainInput = document.querySelector(".counter input");
let plusVale = document.querySelector(".counter .plus");
let minusVale = document.querySelector(".counter .minus");
let num = 1;
mainInput.value = num;

plusVale.addEventListener("click", (e) => {
  num++;
  if (num > 30) {
    num = 30;
  }
  mainInput.value = num;
});

minusVale.addEventListener("click", (e) => {
  num--;
  if (num < 0) {
    num = 0;
  }
  mainInput.value = num;
});

// start change main color

let allColorBtn = document.querySelectorAll(
  ".change-main .content .color span"
);
let settingIcon = document.querySelector(".change-main .icon");
let mainDiv = document.querySelector(".change-main");
settingIcon.addEventListener("click", () => {
  mainDiv.classList.toggle("active");
  background.classList.toggle("active");
  removeNavbar();
});
function removeColorDiv() {
  mainDiv.classList.remove("active");
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("background")) {
    removeColorDiv();
    removeNavbar();
    removeBackground();
  }
});

allColorBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    allColorBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    document.documentElement.style.setProperty(
      "--main-color",
      e.currentTarget.dataset.color
    );
  });
});

// start top category

let liChosen = document.querySelectorAll(".chosen-content ul li");
let imgChosen = document.querySelectorAll(
  ".chosen-content .img-details .image"
);
liChosen.forEach((li, id) => {
  li.addEventListener("click", (e) => {
    liChosen.forEach((li) => li.classList.remove("active"));
    e.currentTarget.classList.add("active");
    imgChosen.forEach((img, indx) => {
      img.classList.remove("active");
      if (id == indx) {
        imgChosen[id].classList.add("active");
      }
    });
  });
});

// start time counter

let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
let timeTwo = new Date("Nov 17, 2022 10:30:20").getTime();
let dayDiv = document.querySelectorAll(".time .days span");
let hoursDiv = document.querySelectorAll(".time .hours span");
let minutesDiv = document.querySelectorAll(".time .minute span");
let secondDiv = document.querySelectorAll(".time .second span");

let myInterval = setInterval(() => {
  let now = new Date().getTime();

  let spaces = countDownDate - now;
  let spacesTwo = timeTwo - now;

  let days = Math.floor(spaces / (1000 * 60 * 60 * 24));
  let hours = Math.floor((spaces % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((spaces % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((spaces % (1000 * 60)) / 1000);

  let daysTwo = Math.floor(spacesTwo / (1000 * 60 * 60 * 24));
  let hoursTwo = Math.floor(
    (spacesTwo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutesTwo = Math.floor((spacesTwo % (1000 * 60 * 60)) / (1000 * 60));
  let secondsTwo = Math.floor((spacesTwo % (1000 * 60)) / 1000);

  dayDiv[0].innerHTML = days;
  dayDiv[3].innerHTML = days;
  dayDiv[1].innerHTML = daysTwo;
  dayDiv[2].innerHTML = daysTwo;

  hoursDiv[0].innerHTML = hours;
  hoursDiv[3].innerHTML = hours;
  hoursDiv[1].innerHTML = hoursTwo;
  hoursDiv[2].innerHTML = hoursTwo;

  minutesDiv[0].innerHTML = minutes;
  minutesDiv[3].innerHTML = minutes;
  minutesDiv[1].innerHTML = minutesTwo;
  minutesDiv[2].innerHTML = minutesTwo;

  secondDiv[0].innerHTML = seconds;
  secondDiv[3].innerHTML = seconds;
  secondDiv[1].innerHTML = secondsTwo;
  secondDiv[2].innerHTML = secondsTwo;

  if (spaces < 0) {
    clearInterval(myInterval);
  }
}, 1000);

// client slider

// let clientDiv = document.querySelectorAll(".container .client-text");
let clientImg = document.querySelectorAll(".container .client-img img");
let mainClient = document.querySelector(".client-details");
let indx = 0;
if (window.innerWidth >= 900) {
  clientImg.forEach((img, id) => {
    img.addEventListener("click", (e) => {
      let id = e.currentTarget.dataset.index;
      clientImg.forEach((img) => img.classList.remove("active"));
      e.currentTarget.classList.add("active");
      mainClient.style.transform = `translateX(${-id * 1270}px)`;
    });
  });
}
if (window.innerWidth >= 767 && window.innerWidth < 900) {
  clientImg.forEach((img, id) => {
    img.addEventListener("click", (e) => {
      let id = e.currentTarget.dataset.index;
      clientImg.forEach((img) => img.classList.remove("active"));
      e.currentTarget.classList.add("active");
      mainClient.style.transform = `translateX(${-id * 710}px)`;
    });
  });
}
if (window.innerWidth >= 1020 && window.innerWidth < 1100) {
  clientImg.forEach((img, id) => {
    img.addEventListener("click", (e) => {
      let id = e.currentTarget.dataset.index;
      clientImg.forEach((img) => img.classList.remove("active"));
      e.currentTarget.classList.add("active");
      mainClient.style.transform = `translateX(${-id * 935}px)`;
    });
  });
}

if (window.innerWidth <= 600) {
  clientImg.forEach((img, id) => {
    img.addEventListener("click", (e) => {
      let id = e.currentTarget.dataset.index;
      clientImg.forEach((img) => img.classList.remove("active"));
      e.currentTarget.classList.add("active");
      mainClient.style.transform = `translateX(${-id * 365}px)`;
    });
  });
}

let instgramContainer = document.querySelector(".instgram-feed .container");
let imgContainer = document.querySelector(".instgram-feed .img-container");
let boxSize = document.querySelector(".img-container .box");

// dark theme

let darkBtn = document.querySelector(".change-main .dark-theme");

darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});

let filterSection = document.querySelector(".filter-product");
let goUpBtn = document.querySelector(".go-up");
let navBarScroller = document.querySelector(".navbar");
window.onscroll = function () {
  if (this.scrollY >= filterSection.offsetTop) {
    goUpBtn.classList.add("active");
  } else {
    goUpBtn.classList.remove("active");
  }

  // if (this.scrollY >= 150) {
  //   navBarScroller.classList.add("active");
  // } else {
  //   navBarScroller.classList.remove("active");
  // }
};

goUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.onload = function () {
  if (this.scrollY >= filterSection.offsetTop) {
    goUpBtn.classList.add("active");
  } else {
    goUpBtn.classList.remove("active");
  }
};

let nextBtn = document.querySelector(".swiper-button-next");
let prevBtn = document.querySelector(".swiper-button-prev");
let divAnimation = document.querySelectorAll(".container .details");
let swiperSlide = document.querySelectorAll(".acDiv .swiper-slide");

// swiperSlide.forEach((e) => {
//   let indx = e.getAttribute("data-swiper-slide-index");

//   divAnimation.forEach((e) => e.classList.remove("active"));
//   divAnimation[indx].classList.add("active");
// });

let mainSwiper = document.querySelector(".mainSwiper");
divAnimation.forEach((ele) => ele.classList.remove("active"));

swiper.on("slideChange", function ({ realIndex: r, previousIndex: p }) {
  divAnimation.forEach((ele) => ele.classList.remove("active"));

  divAnimation[r + 1].classList.add("active");

  if (p + 1 < swiper.slides.length) {
    divAnimation[p + 1].classList.add("active");
  }
  if (p - 1 >= 0) {
    divAnimation[p - 1].classList.add("active");
  }
});

// start testmonial slider

var swiperPhoto = new Swiper(".photoSlider", {
  // loop: true,
  // spaceBetween: 10,
  slidesPerView: 3,
  // freeMode: true,
  // watchSlidesProgress: true,
  grabCursor: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  // loop: true,
  speed: 1500,
  autoplay: {
    delay: 2100,
    disableOnInteraction: false,
    // pauseOnMouseEnter: true,
  },

  spaceBetween: 40,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  thumbs: {
    swiper: swiperPhoto,
  },
});

let testmonialPhoto = document.querySelectorAll(
  ".photoSlider .swiper-slide img"
);
let mainSlideImg = document.querySelector(".mySwiper2");
swiper2.on("slideChange", function ({ realIndex: r, previousIndex: p }) {
  testmonialPhoto.forEach((img) => img.classList.remove("active"));

  testmonialPhoto[r].classList.add("active");
});

// start instgram slide

var swiperOption = new Swiper(".instgramSlide", {
  watchSlidesProgress: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  speed: 1000,
  freeMode: true,
  simulateTouch: false,
  autoplayStopOnLast: false,

  autoplay: {
    delay: 1,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});
