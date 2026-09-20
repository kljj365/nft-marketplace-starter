// Shared Owl Carousel settings for the home page sliders.
const carouselOptions = {
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: { items: 1 },
    576: { items: 2 },
    992: { items: 3 },
    1200: { items: 4 },
  },
};

export default carouselOptions;
