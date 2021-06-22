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
