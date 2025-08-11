const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

const sliderContainer = $("#slider-container");
console.log(sliderContainer);

if (sliderContainer) {
  const totalSlides = sliderContainer.children.length;
  const slideDots = $$(".slider__dot__item");
  console.log(slideDots);

  let index = 0;
  let interval;

  function updateSlide() {
    autoSlide();
    slideDots.forEach((d) => d.classList.remove("active"));
    const width = sliderContainer.getBoundingClientRect().width;
    sliderContainer.style.transform = `translateX(-${index * width}px)`;
    slideDots[index].classList.add("active");
  }

  function nextSlide() {
    index = (index + 1) % totalSlides;
    updateSlide();
  }

  function autoSlide() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 3000);
  }

  window.addEventListener("resize", updateSlide);
  window.addEventListener("load", updateSlide);
}
