let panels = document.querySelectorAll(".panel");
// console.log(panel); // give me a nodelist (Array)

console.log(panels[0]);
//accessing through forEach
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    //deactivating my old active class
    removeActiveClass();
    panel.classList.add("active");
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
