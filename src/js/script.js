$(document).ready(function () {
  $(".carusel").slick({
    speed: 1200,
    centerMode: true,
    slidesToShow: 3,
    prevArrow:
      '<button type="button" class="slick-prev" aria-label="Previous"><img src ="../../icons/arrow_left.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next" aria-label="Next"><img src ="../../icons/arrow_right.png"></button>',
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__menu'),
  menuItem = document.querySelectorAll('.header__menu-item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('header__menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('header__menu_active');
      })
  })
})
