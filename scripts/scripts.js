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

// Nav profile toggler
const nav_profile_menu = document.querySelector(".nav_profile_menu");
function toggleNavMenu() {
  nav_profile_menu.classList.toggle("nav_profile_menu_hidden");
}

// tabs
function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active_tab", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active_tab";
}
window.onload = function () {
  var mockEvent = {
    currentTarget: document.querySelector(".tablinks"),
  };
  openTab(mockEvent, "firstTab");
};

// Logout
const nav_wrapper = document.querySelector(".nav_wrapper");
function handleLogout() {
  nav_wrapper.classList.add("not_logined");
  localStorage.setItem("logined", false);
}

if (localStorage.getItem("logined") == "false") {
  nav_wrapper.classList.add("not_logined");
}

// // Mobile menu wrpper
// function toggleMenu() {
//   let element = document.querySelector(".nav_mob_menu");
//   element.classList.toggle("mob_menu_wrapper");
// }

// Sliders
const { Tablist } = jolty;
Tablist.initAll();
