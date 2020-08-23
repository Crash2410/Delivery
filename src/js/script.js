$(document).ready(function () {
  $(".carusel").slick({
    speed: 1200,
    centerMode: true,
    centerPadding: 0,
    variableWidth: true,
    adaptiveHeight: false,
    prevArrow:
      '<button type="button" class="slick-prev" aria-label="Previous"><img src ="../../icons/arrow_left.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next" aria-label="Next"><img src ="../../icons/arrow_right.png"></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});
