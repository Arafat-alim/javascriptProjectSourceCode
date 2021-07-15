const body = document.body;
const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");
const slides = document.querySelectorAll(".slide");

let activeSlide = 0;
setBgBody();

rightBtn.addEventListener("click", () => {
  //   alert("Right button activated");
  activeSlide++;
  console.log(activeSlide);
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;
  console.log(activeSlide);
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgBody();
  setActiveSlide();
});

function setBgBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}
