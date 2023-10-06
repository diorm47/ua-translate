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
