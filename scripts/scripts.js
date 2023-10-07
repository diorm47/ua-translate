// Adverts carousel
$(document).ready(function () {
  $(".adverts_carousel").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    speed: 1000,
    focusOnSelect: true,
    prevArrow: $(".adverts_left_arrow"),
    nextArrow: $(".adverts_right_arrow"),
  });
});

// news carousel
$(document).ready(function () {
  $(".news_block_carousel").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
    speed: 1000,
    focusOnSelect: true,
    prevArrow: $(".news_left_arrow"),
    nextArrow: $(".news_right_arrow"),
  });
});

// Trends carousel
$(document).ready(function () {
  $(".trends_block_carousel").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
    speed: 1000,
    focusOnSelect: true,
    prevArrow: $(".trends_left_arrow"),
    nextArrow: $(".trends_right_arrow"),
  });
});

// recs carousel
$(document).ready(function () {
  $(".rec_block_carousel").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
    speed: 1000,
    focusOnSelect: true,
    prevArrow: $(".rec_left_arrow"),
    nextArrow: $(".rec_right_arrow"),
  });
});
// other books carousel
$(document).ready(function () {
  $(".other_books_carousel").slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
    speed: 1000,
    focusOnSelect: true,
    prevArrow: $(".other_left_arrow"),
    nextArrow: $(".other_right_arrow"),
  });
});

// Navigation active
let navItems = document.querySelectorAll(".navigation_bar a");
for (let i = 0; i < navItems.length; i++) {
  if (navItems[i].href == window.location.href) {
    navItems[i].className = "active_nav_menu";
  }
}

// Tabs
const { Tablist } = jolty;
Tablist.initAll();

// // Mobile menu wrpper
// function toggleMenu() {
//   let element = document.querySelector(".nav_mob_menu");
//   element.classList.toggle("mob_menu_wrapper");
// }
