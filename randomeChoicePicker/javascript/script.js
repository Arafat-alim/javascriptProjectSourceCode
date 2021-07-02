console.log("object");
let tagsElem = document.getElementById("tags");
let textArea = document.getElementById("textbody");

textArea.focus();
textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  //!checking the user hit enter or not
  if (e.key === "Enter") {
    //!clear my input area
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    selectRandom();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsElem.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span"); //creatin an span element
    tagEl.classList.add("tag");
    tagEl.innerHTML = tag;
    tagsElem.appendChild(tagEl);
  });
}

//! random part starts here
//!main function
function selectRandom() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTags();
    highlight(randomTag);

    setTimeout(() => {
      unHighlight(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTags();
      highlight(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTags() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
  tag.classList.add("highlight");
}

function unHighlight(tag) {
  tag.classList.remove("highlight");
}
