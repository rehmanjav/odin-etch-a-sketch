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
    while (true) {
        let prompt = prompt("Enter grid size. (100 max)");

        if (+prompt <= 100 && +prompt >=1) {
            break;
        }
    }
    
}

// START

plotGrid(16);

let newDrawingBtn = document.querySelector(".new-drawing");
newDrawingBtn.addEventListener('click', plotGrid());

