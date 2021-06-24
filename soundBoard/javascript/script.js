//! FIrst creating an list of sound array
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

//! Now iterating an array and creating buttons

sounds.forEach(sound => {
    const btnCreate = document.createElement("button"); //creating an element
    btnCreate.classList.add('btns'); //adding a classs

    btnCreate.innerText = sound; //adding text

    btnCreate.addEventListener('click', () => {
        document.getElementById(sound).play();
    })


    // // document.getElementById("btn").appendChild(btnCreate);
    document.getElementById("btn").appendChild(btnCreate)


})