var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      centeredSlidesBounds: true,
      centerInsufficientSlides: true,
      spaceBetween: 3,
      loop: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 1,
        modifier: 1,
        slideShadows: true,
      },
      //autoplay: {
        //delay: 6000,
        //disableOnInteraction: false,
      //},
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });