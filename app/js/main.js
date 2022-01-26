$(function () {
  $(".product__slider").slick({
    prevArrow:
      '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18"fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
    nextArrow:
      '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18"fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
  });
});

$(".questions__item-title").on("click", function () {
  $(this).toggleClass("in").next().slideToggle();
  $(".questions__item-title").not(this).removeClass("in").next().slideUp();
});

$("#fullpage").fullpage({
  autoScrolling: true,
  scrollHorizontally: true,
  sectionSelector: ".page-section",
  scrollOverflow: "true",
  anchors: [
    "top",
    "products",
    "benefits",
    "specification",
    "questions",
    "contacts",
  ],
  menu: "#header__nav",
});

$(".menu__btn").on("click", function () {
  $(".menu__btn").toggleClass("menu__btn--active");
  $(".menu__list").toggleClass("menu__list--active");
});
$(".menu__list-link").on("click", function () {
  $(".menu__btn").removeClass("menu__btn--active");
  $(".menu__list").removeClass("menu__list--active");
});
