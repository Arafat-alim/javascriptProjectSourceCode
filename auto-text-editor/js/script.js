const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "Its Harder to Read Code than to write it ❤️";
let speed = 300 / speedEl.value;
let idx = 1;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;
  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});
