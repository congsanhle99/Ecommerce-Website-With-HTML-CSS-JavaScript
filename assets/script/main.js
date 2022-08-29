// index
const bar = document.querySelector("#bar");
const navbar = document.querySelector("#navbar");
const close = document.querySelector("#close");

// click product in shop direct to product detail
const products = document.querySelectorAll(".pro");

// product details
const MainImg = document.querySelector("#MainImg");
const smallImgs = document.querySelectorAll(".small-img");

// index
if (bar) {
  bar.addEventListener("click", () => {
    navbar.style.right = 0;
  });
}

if (close) {
  close.addEventListener("click", () => {
    navbar.style.right = `${-300}px`;
  });
}

// click product in shop direct to product detail
products[0].addEventListener("click", () => {
  window.location.href = "sproduct.html";
});

// product details
smallImgs.forEach((smallImg) => {
  smallImg.addEventListener("click", () => {
    MainImg.src = smallImg.src;
  });
});
