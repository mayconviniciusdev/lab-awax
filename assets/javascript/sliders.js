const bannerSwiper = new Swiper('.swiper-banner', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: { el: '.swiper-pagination', clickable: true},
  autoplay: {delay: 3000,},
});

const teamSwiper = new Swiper('.swiper-team', {
  loop: true,
  spaceBetween: 20,
  autoplay: {delay: 3000},
  breakpoints: {0: {slidesPerView: 1,}, 768: {slidesPerView: 2,}, 1024: {slidesPerView: 3,}},
});

const testimonialsSwiper = new Swiper('.swiper-testimonials', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: { el: '.swiper-pagination', clickable: true},
  autoplay: {delay: 3000,},
});