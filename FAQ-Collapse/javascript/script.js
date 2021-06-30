let toggles = document.querySelectorAll(".faq-toggle"); //node list milega

toggles.forEach((toggle) => {
  toggle.addEventListener("click", function () {
    toggle.parentNode.classList.toggle("active");
  });
});
