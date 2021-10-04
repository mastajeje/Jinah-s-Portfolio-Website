## 캐러셀 슬라이드

- 캐러셀 슬라이드의 재사용성을 높이기 위해 함수화하여 반복사용 하였습니다.
- 특정 사진을 클릭하면 모달창 안에서 캐러셀 슬라이드가 보여지도록 구현했습니다.

```
javascript

const carousel = (id) => {
  const container = document.querySelector(id + " .carousel__track-container");
  const track = document.querySelector(id + " .carousel__track");
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector(id + " .prevBtn");
  const nextBtn = document.querySelector(id + " .nextBtn");
  const slideLen = slides.length;

  // Retrieve width of a slide from css value
  const slideWidth = parseInt(
    window.getComputedStyle(slides[0]).getPropertyValue("width")
  );

  const handleResize = () => {
    slideWidth = container.getBoundingClientRect.width;
  };

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

  container.addEventListener("resize", handleResize);
};

carousel("#carousel-a");
carousel("#carousel-b");
carousel("#carousel-c");
carousel("#carousel-d");
```

- 캐러셀 슬라이드를 추가하려면 먼저 HTML에 id를 가진 캐러셀 엘리먼트를 작성한다.
- carousel.js에 캐러셀 엘리먼트의 id를 매개변수로 하여 carousel함수를 호출하면 슬라이드가 작동한다.

![포트폴리오_모달-캐러셀](https://user-images.githubusercontent.com/79352105/135839992-798e7aea-1d11-4e4b-b363-5c36709f3586.gif)
