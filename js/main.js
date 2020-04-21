$(function () {
  $(".menu-slider").slick({
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 1,
    slidesPerRow: 3,
    dotsClass: "munu-slider__dots",
    customPaging: function (slider) {
      return '<span class="munu-slider__dot"></span>';
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          rows: 1,
          slidesPerRow: 2,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          rows: 2,
          slidesPerRow: 2,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 667,
        settings: {
          rows: 2,
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".testimonials-slider").slick({
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: !0,
    speed: 400,
    rows: 0,
    cssEase: "linear",
    nextArrow:
      '<button class="testimonails-slider__btn testimonails-slider__btn--next"><img src="images/right-arrow.svg" alt="#"></button>',
    prevArrow:
      '<button class="testimonails-slider__btn testimonails-slider__btn--prev"><img src="images/left-chevron.svg" alt="#"></button>'
  });

  mixitup(".gallery__items", {
    load: {
      filter: "all"
    }
  });
});
