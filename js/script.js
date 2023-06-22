const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    speed: 10,
    // onclick: {
    //     init: function() {
    //       var slides = this.slides;
    //       //slides[0].classList.add('rotated'); // Add 'rotated' class to the first slide
    //     },
    //     slideChange: function() {
    //       var slides = this.slides;
    //       var activeIndex = this.activeIndex;
    //       // Check if the active slide is the first slide
    //         // Add 'rotated' class to the first slide
    //         slides[0].classList.add('rotated');
    
    //     }
    //   },
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