// const modalCheck = document.querySelectorAll(".modal");
// let slideWidth;

// const carousel = (id) => {
//   const track = document.querySelector(id + " .carousel__track");
//   const slides = Array.from(track.children);
//   const prevBtn = document.querySelector(id + " .prevBtn");
//   const nextBtn = document.querySelector(id + " .nextBtn");

//   const setSlidePosition = (slide, index) => {
//     slide.style.left = `${slideWidth * index}px`;
//   };
//   const handleModalCheck = () => {
//     slides.forEach(setSlidePosition);
//     return (slideWidth = slides[0].getBoundingClientRect().width);
//   };

//   const moveToSlide = (track, currentSlide, targetSlide) => {
//     track.style.transform = `translateX(-${targetSlide.style.left})`;
//     currentSlide.classList.remove("current-slide");
//     targetSlide.classList.add("current-slide");
//   };

//   prevBtn.addEventListener("click", (e) => {
//     const currentSlide = track.querySelector(".current-slide");
//     const prevSlide = currentSlide.previousElementSibling;
//     const prevIndex = slides.findIndex((slide) => slide === prevSlide);
//     moveToSlide(track, currentSlide, prevSlide);
//   });

//   nextBtn.addEventListener("click", (e) => {
//     const currentSlide = track.querySelector(".current-slide");
//     const nextSlide = currentSlide.nextElementSibling;
//     const nextIndex = slides.findIndex((slide) => slide === nextSlide);
//     moveToSlide(track, currentSlide, nextSlide);
//   });

//   modalCheck.forEach(() => addEventListener("click", handleModalCheck));
// };
// carousel("#carousel-a");

// const modalCheck = document.querySelectorAll(".modal");
// let size;

// const carousel = (id) => {
//   const track = document.querySelector(id + " .carousel__track");
//   const slide = track.querySelectorAll(".carousel__track img");

//   const prevBtn = document.querySelector(id + " .prevBtn");
//   const nextBtn = document.querySelector(id + " .nextBtn");

//   let counter = 1;

//   const handleModalCheck = () => {
//     size = slide[0].clientWidth;
//     console.log(size);
//   };

//   track.getElementsByClassName.transform = `translateX(${-size * counter}px)`;

//   modalCheck.forEach(() => addEventListener("resize", handleModalCheck));
// };

// carousel("#carousel-a");
