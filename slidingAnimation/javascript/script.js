let boxes = document.querySelectorAll('.box');

window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    //looping my each box
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; //see mdn for more clear concept

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show')
        }
    })
}