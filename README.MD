# <span id='top'>치과위생사 박진아의 포트폴리오 사이트</span>

### Project <a href="https://flexing1010.github.io/Jinah-s-Portfolio-Website/">사이트 바로가기</a>

프리랜서 활동을 준비중인 치과위생사 박진아님의 포트폴리오 사이트 입니다

- 자바스크립트과, HTML, CSS를 사용하여 만든 사이트입니다.

- 핸드폰, 태블릿, 컴퓨터에서의 사용을 고려한 반응형 사이트입니다.

- 사용자에게 흥미를 주기 위하여 사진을 클릭하면 캐러셀 슬라이드가 나오는 모달창을 추가하였습니다.

<br />

# 주요기능

### 바로가기

- <a href="#menu">메뉴바 </a>
- <a href="#modal">모달창</a>
- <a href="#carousel">캐러셀 슬라이드</a>

## <span id='menu'>메뉴바</span>

```
javascript

const menuIcon = document.getElementById("jsMenuBar");
const menu = document.querySelector(".menu");

const handleMenuIcon = () => {
  menu.classList.toggle("show-nav");
};

menuIcon.addEventListener("click", handleMenuIcon);

```

- HTML과 CSS로 메뉴바를 만든다.
- 자바스크립트를 사용하여 메뉴 아이콘을 클릭할때 마다 show-nav라는 class를 toggle하게 하여 메뉴바를 숨기거나 나타나게 한다.

![포트폴리오-메뉴바](https://user-images.githubusercontent.com/79352105/135840150-9bbc7773-3ff1-4ba2-aa25-3813c654417a.gif)

<br />

## <span id='modal'>모달창</span>

```
javascript

const toModal = document.querySelectorAll(".jsToModal");
const modal = document.querySelectorAll(".modal");
const closeBtn = document.querySelectorAll(".jsCloseModal");

const handleClick = (e) => {
  const index = e.target.dataset.index;
  modal[index].classList.add("show-modal");
  document.querySelector("html").style.overflowY = "hidden";
};

const handleClose = (e) => {
  const index = e.target.dataset.index;
  modal[index].classList.remove("show-modal");
  document.querySelector("html").style.overflowY = "auto";
};

// Close modal on click outside //
const modalClick = (e) => {
  const index = e.target.dataset.index;
  const selectedModal = modal[index];
  if (selectedModal && e.target.classList == selectedModal.classList) {
    selectedModal.classList.remove("show-modal");
    document.querySelector("html").style.overflowY = "auto";
  }
};

toModal.forEach((element) => element.addEventListener("click", handleClick));
closeBtn.forEach((element) => element.addEventListener("click", handleClose));
document.addEventListener("click", modalClick);

```

- HTML, CSS로 모달창을 만든 후 숨긴다.
- 특정 엘리먼트를 클릭하면 모달창을 보여지게 하는 show-modal class를 추가 한다.
- 여러개의 모달창이 있기 때문에 forEach를 사용해서 각각의 모달창에 eventListener를 추가한다.

![포트폴리오-모달](https://user-images.githubusercontent.com/79352105/135840141-b7369a5c-8806-40c9-b36f-53fbeb9ad5f6.gif)

<br />

## <span id='carousel'>캐러셀 슬라이드</span>

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

### <a href="#top">맨 위로</a>
