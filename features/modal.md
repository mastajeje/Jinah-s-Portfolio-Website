## 모달창

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
