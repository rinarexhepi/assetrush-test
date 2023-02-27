export const vueSlickCarouselConfig = {
  infinite: true,
  speed: 10,
  autoplaySpeed: 10,
  variableWidth: false,
  adaptiveHeight: false,
  autoplay: true,
  slidesToScroll: 1,
  slidesToShow: 3,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};
