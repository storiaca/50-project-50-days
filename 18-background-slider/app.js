const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

if (activeSlide === 0) {
  leftBtn.style.display = "none";
}

rightBtn.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > 0) {
    leftBtn.style.display = "block";
  }
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
    rightBtn.style.display = "none";
  }

  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
    rightBtn.style.display = "block";
  }

  if (activeSlide === 0) {
    leftBtn.style.display = "none";
  }

  setBgToBody();
  setActiveSlide();
});

setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}
