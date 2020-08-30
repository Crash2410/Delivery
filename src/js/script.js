$(document).ready(function () {
  // Slider

  $(".carusel").slick({
    speed: 1000,
    centerMode: true,
    slidesToShow: 3,
    prevArrow:
      '<button type="button" class="slick-prev" aria-label="Previous"><div class="arrow_left"></div></button>',
    nextArrow:
      '<button type="button" class="slick-next" aria-label="Next"><div class="arrow_right"></div></button>',
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

  // Validator

  function validation(item) {
    $(item).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true,
        },
        text: "required",
      },
      messages: {
        name: "Пожалуйста, введи свое имя.",
        phone: "Пожалуйста, введите свой номер телефон.",
        email: {
          required: "Пожалуйста, введите свою почту.",
          email: "Неправильно введен адрес почты.",
        },
        text: "Пожалуйства, введи свое сообщение.",
      },
    });
  }

  validation("#question-form");
  validation("#consultation-form");

  $("input[name=phone]").mask(
    "+7 999-999-99-99",
    { placeholder: " " },
    { autoclear: false },
    { maxlength: "10" }
  );

  // Scroll UP

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }
  });

  // SlowScrolling

  function slowScrolling(item) {
    $(`a[href=${item}]`).click(function () {
      const _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
    });
  }

  slowScrolling("#up");
  slowScrolling("#advantages");
  slowScrolling("#works");
  slowScrolling("#prices");
  slowScrolling("#consultation");
  slowScrolling("#methods");
  slowScrolling("#comments");
  slowScrolling("#questions");
});

// Mobile menu
window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header__menu"),
    menuItem = document.querySelectorAll(".header__menu-item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("header__menu_active");
  });

  menuItem.forEach(item => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("header__menu_active");
    });
  });
});

// AOS.JS
AOS.init({});
