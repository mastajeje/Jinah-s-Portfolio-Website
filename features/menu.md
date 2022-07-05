## 메뉴바

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
