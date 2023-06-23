const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    speed: 10,
    spaceBetween: 100,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});