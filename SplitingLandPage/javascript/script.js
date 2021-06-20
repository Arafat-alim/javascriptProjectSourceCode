let left = document.querySelector(".left")
let right = document.querySelector(".right")
let container = document.querySelector(".container")

// Effect on left part
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

// Effect on Right Part
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))