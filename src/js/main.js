const burgerBtn = document.querySelector(".header__hamburger-btn");
const header = document.querySelector(".header");

burgerBtn.addEventListener("click", handleNav);
window.addEventListener("scroll", handleHeader);

function handleNav() {
  header.classList.toggle("change");
}

function handleHeader() {
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}
