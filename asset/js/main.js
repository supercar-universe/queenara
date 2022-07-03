const $ = document.querySelector.bind(document);
let header = $("#header"),
  fixed = header.offsetTop;
(window.onscroll = () => {
  window.pageYOffset > fixed
    ? header.classList.add("fixed")
    : header.classList.remove("fixed");
}),
  ($(".mobile_bar").onclick = () => {
    $(".nav").classList.toggle("mobile_show");
  });
$(".scroll_top").onclick = () => {
  window.scrollTo(0, 0);
};
let $swiper = $(".swiper-container"),
  $bottomSlide = null,
  $bottomSlideContent = null,
  mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 1,
    slidesPerView: 2,
    centeredSlides: !0,
    roundLengths: !0,
    breakpoints: { 100: { slidesPerView: 1 }, 1200: { slidesPerView: 2 } },
    loop: !0,
    loopAdditionalSlides: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
  swiper = new Swiper(".libary_images", {
    spaceBetween: 20,
    slidesPerView: 4,
    roundLengths: !0,
    loop: !0,
    loopAdditionalSlides: 30,
    breakpoints: {
      100: { slidesPerView: 1 },
      600: { slidesPerView: 2 },
      1200: { slidesPerView: 4 },
    },
    autoplay: { delay: 3e3 },
    loop: !0,
  });
