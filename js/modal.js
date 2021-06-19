const toModal = document.querySelectorAll(".jsToModal");
const modal = document.querySelectorAll(".modal");
const closeBtn = document.querySelectorAll(".jsCloseModal");

let slideWidth;

const handleClick = (e) => {
  const index = e.target.dataset.index;
  modal[index].classList.add("show-modal");
  // document.querySelector("html").style.overflowY = "hidden";
  // const track = document.querySelector("#carousel-a .carousel__track");
  // const slides = Array.from(track.children);
  // slideWidth = slides[0].getBoundingClientRect().width;
  carousel("#carousel-a");
  carousel("#carousel-b");
};

const handleClose = (e) => {
  const index = e.target.dataset.index;
  modal[index].classList.remove("show-modal");
  // document.querySelector("html").style.overflowY = "auto";
};

toModal.forEach((element) => element.addEventListener("click", handleClick));
closeBtn.forEach((element) => element.addEventListener("click", handleClose));

////////////////////////
// Carousel Functions //
////////////////////////

const modalCheck = document.querySelectorAll(".modal");

const carousel = (id) => {
  const track = document.querySelector(id + " .carousel__track");
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector(id + " .prevBtn");
  const nextBtn = document.querySelector(id + " .nextBtn");

  const slideLen = slides.length;
  slideWidth = slides[0].getBoundingClientRect().width;
  track.style.width = `${slideLen * slideWidth}px`;

  const setSlidePosition = (slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
  };
  slides.forEach(setSlidePosition);

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  };

  prevBtn.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex((slide) => slide === prevSlide);
    moveToSlide(track, currentSlide, prevSlide);
  });

  nextBtn.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex((slide) => slide === nextSlide);
    moveToSlide(track, currentSlide, nextSlide);
  });
};
