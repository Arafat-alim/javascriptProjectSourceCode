let addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => addNewNote());

//!Getting notes from the local storage
const notes = JSON.parse(localStorage.getItem("note"));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

// console.log(notes);

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
      <div class="tools">
          <button class="save">
         <i class="far fa-save"></i>
        </button>
        <button class="edit">
          <i class="fas fa-edit"></i>
        </button>
        <button class="delete">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
      <div class="main ${text ? "" : "hidden"}"></div>
      <textarea placeholder="Enter Your Text" class="${
        text ? "hidden" : ""
      }"></textarea>
  `;

  const editBtn = note.querySelector(".edit");
  const delBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");
  const saveBtn = note.querySelector(".save");

  textArea.value = text;
  main.innerHTML = marked(text);

  delBtn.addEventListener("click", () => {
    note.remove(); //just remove the element
    LS();
  });

  editBtn.addEventListener("click", () => {
    main.classList.add("hidden");

    textArea.classList.remove("hidden");
  });

  saveBtn.addEventListener("click", () => {
    main.classList.remove("hidden");
    textArea.classList.add("hidden");
    LS();
  });
  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
  });

  document.body.appendChild(note);
}

function LS() {
  const notesText = document.querySelectorAll("textArea");

  let notes = []; //create an empty array

  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem("note", JSON.stringify(notes));
}
