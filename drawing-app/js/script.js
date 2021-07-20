// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const clearEl = document.getElementById("clear");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const colorEl = document.getElementById("color");
const sizeEl = document.getElementById("size");

let size = 10; //default size of my circle
colorEl.value = "red";
let color = colorEl.value;
console.log(colorEl.value);
// color = "Red";
let isPressed = false;
let x;
let y;

function updateSizeOnScreen() {
  sizeEl.innerHTML = size;
  console.log(size);
}

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
  console.log(x, y);
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
  console.log(x, y);
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2); // Outer circle
  //   ctx.arc(75, 75, 50, 0(start angle), Math.PI * 2(end angle), clockwise/anticlockwise);

  //color on the circle first
  ctx.fillStyle = color;
  ctx.fill();
}

//!(((((((((Line Draw)))))))))

//x1 and y1 = move to
//x2 and y2 = begin from

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
// drawCircle(100, 200);
// drawLine(300, 300, 300, 500);

// ! Clear Button
clearEl.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

//increase my pen size
increaseBtn.addEventListener("click", () => {
  size = size + 5;

  if (size >= 50) {
    size = 50;
  }

  updateSizeOnScreen();
});
decreaseBtn.addEventListener("click", () => {
  size = size - 5;

  if (size <= 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

//! Note: Color changing cant be possible in firefox
// WOrk well on chrome

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

console.log(color);
