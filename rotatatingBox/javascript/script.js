let x = 0;
function rotating() {
  x++;
  if (x % 2 !== 0) {
    document.getElementById("box").style.transform = "rotate(180deg)";
  } else {
    document.getElementById("box").style.transform = "rotate(0deg)";
  }
}
