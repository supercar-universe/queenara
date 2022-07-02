const $ = document.querySelector.bind(document);
let header = $("#header");
let fixed = header.offsetTop;
window.onscroll = () => {
  if (window.pageYOffset > fixed) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
};

// Get the header

// Get the offset position of the navbar

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

// Assign some jquery elements we'll need
let $swiper = $(".swiper-container");
let $bottomSlide = null; // Slide whose content gets 'extracted' and placed
// into a fixed position for animation purposes
let $bottomSlideContent = null; // Slide content that gets passed between the
// panning slide stack and the position 'behind'
// the stack, needed for correct animation style

let mySwiper = new Swiper(".swiper-container", {
  spaceBetween: 1,
  slidesPerView: 2,
  centeredSlides: true,
  roundLengths: true,
  breakpoints: {
    100: {
      slidesPerView: 1,
    },

    600: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
    },
  },
  loop: true,
  loopAdditionalSlides: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let swiper = new Swiper(".libary_images", {
  spaceBetween: 20,
  slidesPerView: 4,
  roundLengths: true,
  loop: true,
  loopAdditionalSlides: 30,
  breakpoints: {
    100: {
      slidesPerView: 1,
    },

    600: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  autoplay: {
    delay: 3000,
  },
  loop: true,
});
