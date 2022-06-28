const swiper = new Swiper ('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  autoplay: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
