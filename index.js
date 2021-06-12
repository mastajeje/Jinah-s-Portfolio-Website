const container = document.querySelector(".portfolio-container");
const menuIcon = document.getElementById("jsMenuBar");
const menu = document.querySelector(".menu");

const handleMenuIcon = () => {
  menu.classList.toggle("show-nav");
};

menuIcon.addEventListener("click", handleMenuIcon);
