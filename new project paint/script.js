let colors = ["red", "orangered", "orange", "yellow", "yellowgreen", "lightgreen", "green", "turquoise", "cyan", "skyblue", "dodgerblue", "blue", "darkblue", "purple", "magenta", "violet", "pink", "lightgray", "gray", "black", "white" ];
let selectedcColor = "black";
let isDrawing = false;
let colorsDiv = document.getElementById("colors");
let board = document.getElementById("board");
let clearButton = document.getElementById("clear");
let saveButton = document.getElementById("save");

// Create colors

for (let i = 0; i < colors.length; i++) {
    let color = document.createElement("div");
    color.classList.add("color");
    color.style.backgroundColor = colors[i];
    color.addEventListener("click", function() {
        selectedColor = colors[i];
    })
    colorsDiv.appendChild(color);
}

// Create squares 
for (let i =0; i < 1800; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mousedown", function() {
        isDrawing = true;
        square.style.backgroundColor = selectedColor;
    });
    square.addEventListener("mouseover", function() {
        if (isDrawing === true) {
            square.style.backgroundColor = selectedColor;
        }
    });
    board.appendChild(square);
}

//stop drawing

document.addEventListener("mouseup", function() {
    isDrawing = false;
});

//clear board

clearButton.addEventListener("click", function() {
    let squares = document.querySelectorAll(".square");
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "white";
    }
});

//save image

saveButton.addEventListener("click", function() {
    let squares = document.createEl
})