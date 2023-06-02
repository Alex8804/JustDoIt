const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // что-бы сделать пагинацию кликабельной
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// Swiper for reviews
var reviewsSwiper = new Swiper('.slide-container', {
  slidesPerView: 1,
  // slidesPerGroup: 2,
  spaceBetween: 20,
  // centerInsufficientSlides: true,
  // centeredSlides: true,
  // centeredSlidesBounds: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
