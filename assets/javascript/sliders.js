const bannerSwiper = new Swiper('.swiper-banner', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: { el: '.swiper-pagination', clickable: true},
  autoplay: {delay: 3000,},
});

const teamSwiper = new Swiper('.swiper-team', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
  },
});

const testimonialsSwiper = new Swiper('.swiper-testimonials', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: { el: '.swiper-pagination', clickable: true},
  autoplay: {delay: 3000,},
});