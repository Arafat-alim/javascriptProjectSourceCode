const buttons = document.querySelectorAll(".ripple");

buttons.forEach((b) => {
  b.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;

    const insideX = x - btnLeft;
    const insideY = y - btnTop;

    console.log(insideX, insideY);

    //time to create an element named span
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = insideY + "px";
    circle.style.left = insideX + "px";

    this.appendChild(circle);

    //now remove the waste added classes - style

    setTimeout(() => circle.remove(), 500);
  });
});
