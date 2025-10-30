const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: { el: '.swiper-pagination', clickable: true},
  autoplay: {delay: 3000,},
});