document.addEventListener("DOMContentLoaded", function () {

let box = document.getElementById("color-box");
let button = document.getElementById("change-color-btn");

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

button.addEventListener("click", function () {
    let newColor = getRandomColor();
    box.style.backgroundColor = newColor;
});

});