"use strict";

function plotGrid (n) {
    let container = document.querySelector(".container");
    container.replaceChildren();
    
    for (let i = 0; i < n**2; i++) {
        let height = 960 / (n);
        let newDiv = document.createElement('div');
        newDiv.classList.add('pixel');
        newDiv.style.width = `${height}px`;
        newDiv.style.height = `${height}px`;
        container.appendChild(newDiv);
    }

}

function newDrawing () {
    let gridSize = '';
    while (true) {
        gridSize = prompt("Enter grid size. (100 max)");

        if (+gridSize <= 100 && +gridSize >=1) {
            break;
        }
    }
    plotGrid(+gridSize);
    
}

// START

let newDrawingBtn = document.querySelector(".new-drawing");
newDrawingBtn.addEventListener('click', newDrawing);

plotGrid(10);



