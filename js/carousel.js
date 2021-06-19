let slideWidth;

const carousel = (id) => {
  const track = document.querySelector(id + " .carousel__track");
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector(id + " .prevBtn");
  const nextBtn = document.querySelector(id + " .nextBtn");
  const slideLen = slides.length;

  // Retrieve width of a slide from css value
  slideWidth = parseInt(
    window.getComputedStyle(slides[0]).getPropertyValue("width")
  );
  // Set width of carousel track(number of slide x width of a slide)
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

  // Button Function //
  const hideShowBtn = (index) => {
    if (index === 0) {
      prevBtn.classList.add("hideBtn");
      nextBtn.classList.remove("hideBtn");
    } else if (index === slideLen - 1) {
      prevBtn.classList.remove("hideBtn");
      nextBtn.classList.add("hideBtn");
    } else {
      prevBtn.classList.remove("hideBtn");
      nextBtn.classList.remove("hideBtn");
    }
  };

  prevBtn.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex((slide) => slide === prevSlide);
    moveToSlide(track, currentSlide, prevSlide);
    hideShowBtn(prevIndex);
  });

  nextBtn.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex((slide) => slide === nextSlide);
    moveToSlide(track, currentSlide, nextSlide);
    hideShowBtn(nextIndex);
  });
};

carousel("#carousel-a");
carousel("#carousel-b");
