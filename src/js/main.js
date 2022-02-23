import * as flsFunctions from "./modules/function.js";
import Swiper from "swiper";
import { TweenMax, Power2 } from "gsap";
import $ from "jquery";

flsFunctions.isWebp();

const burger = document.querySelector(".burger");
const header = document.querySelector(".header");
const menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  header.classList.toggle("active");
  burger.classList.toggle("active");
});

const swiper = new Swiper(".work__flex", {
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 22,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 2,
    },
    390: {
      slidesPerView: 2,
    },
  },
});

const swiperInstagram = new Swiper(".instagram", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 22,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 2,
    },
    390: {
      slidesPerView: 2,
    },
  },
});
const workFilter = new Swiper(".work__filter", {
  direction: "horizontal",
  spaceBetween: 52,
  slidesPerView: "auto",
});

$(".down-button").mouseleave(function (e) {
  TweenMax.to(this, 0.3, { height: 150, width: 150, right: -40 });
  TweenMax.to(".down-button img", 0.3, { scale: 1, x: 0, y: 0 });
});

$(".down-button").mouseenter(function (e) {
  TweenMax.to(this, 0.3, { height: 200, width: 200, right: 0 });
  TweenMax.to(".down-button img", 0.3, { scale: 1.3 });
});

$(".down-button").mousemove(function (e) {
  callParallax(e);
});

function callParallax(e) {
  parallaxIt(e, ".down-button img", 80);
}

function parallaxIt(e, target, movement) {
  var $this = $(".down-button");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 0.3, {
    x: ((relX - $this.width() / 2) / $this.width()) * movement,
    y: ((relY - $this.height() / 2) / $this.height()) * movement,
    ease: Power2.easeOut,
  });
}

var btnScrollDown = document.querySelector(".down-button");

btnScrollDown.addEventListener("click", scrollDown);

function scrollDown() {
  window.scrollTo({
    top: window.pageYOffset + 950,
    behavior: "smooth",
  });
}

const workFilterbutton = document.querySelectorAll(".work__filter ul li");

workFilterbutton.forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    workFilterbutton.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
      filterButton.classList.add("active");
    });
  });
});

$(".work__filter ul li").on("click", function () {
  var $filter = $(this).attr("data-filter");

  if ($filter == "Всі") {
    $(".work__item").show();
  } else {
    $(".work__item").hide();
    $(".work__item[data-filter=" + $filter + "]").show();
  }
});

const imgs = document.querySelectorAll(".post__galery-item img");
const fullPage = document.querySelector("#fullpage");
imgs.forEach((img) => {
  img.addEventListener("mouseenter", function () {
    img.style.cursor = "zoom-in";
  });
  img.addEventListener("click", function () {
    fullPage.style.backgroundImage = "url(" + img.src + ")";
    fullPage.style.display = "block";
  });
});
fullPage.addEventListener("mouseenter", function () {
  fullPage.style.cursor = "zoom-out";
});
const popup = document.querySelector(".popup");
const popupOpen = document.querySelector("#open-popup");
const popupClose = document.querySelector(".close-popup");

popupOpen.addEventListener("click", function () {
  popup.classList.add("active");
});
popupClose.addEventListener("click", function () {
  popup.classList.remove("active");
});
