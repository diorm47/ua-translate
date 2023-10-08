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
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
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
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
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
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
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
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// Logout
const nav_wrapper = document.querySelector(".nav_wrapper");
function handleLoginBtn() {
  nav_wrapper.classList.remove("not_logined");
  localStorage.setItem("logined", true);
  window.location.reload();
}
function handleLogout() {
  nav_wrapper.classList.add("not_logined");
  localStorage.setItem("logined", false);
}
if (localStorage.getItem("logined") == "false") {
  nav_wrapper.classList.add("not_logined");
  nav_wrapper.classList.remove("logined_nav");
}
if (localStorage.getItem("logined") != "false") {
  nav_wrapper.classList.add("logined_nav");
  nav_wrapper.classList.remove("not_logined");
}

// Login
const login_auth_wrapper = document.querySelector(".login_auth_wrapper");
const login_modal = document.querySelector(".login_modal");
const auth_modal = document.querySelector(".auth_modal");
function handleLogin() {
  login_auth_wrapper.style.display = "flex";
  login_modal.style.display = "flex";
  auth_modal.style.display = "none";
}
function handleLoginExit() {
  login_auth_wrapper.style.display = "none";
  login_modal.style.display = "none";
  auth_modal.style.display = "none";
}
function handleAuth() {
  login_auth_wrapper.style.display = "flex";
  auth_modal.style.display = "flex";
  login_modal.style.display = "none";
}
function handleAuthExit() {
  login_auth_wrapper.style.display = "none";
  auth_modal.style.display = "none";
  login_modal.style.display = "none";
}

// Navigation active
let navItems = document.querySelectorAll(".navigation_bar a");
for (let i = 0; i < navItems.length; i++) {
  if (navItems[i].href == window.location.href) {
    navItems[i].className = "active_nav_menu";
  }
}

// Nav profile toggler
const nav_profile_menu = document.querySelector(".nav_profile_menu");
const mobile_profile = document.querySelector(".mobile_login .nav_profile_menu");


function toggleNavMenu() {
  nav_profile_menu.classList.toggle("nav_profile_menu_hidden");
  mobile_profile.classList.toggle("nav_profile_menu_hidden");
}

// Mobile menu wrpper
function toggleMenu() {
  let element = document.querySelector(".nav_mob_menu");
  element.classList.toggle("mob_menu_wrapper");
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



// Sliders
const { Tablist } = jolty;
Tablist.initAll();
