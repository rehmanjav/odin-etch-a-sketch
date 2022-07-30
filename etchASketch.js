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

    let pixels = document.querySelectorAll(".pixel");

    pixels.forEach(e => {
        e.addEventListener('mouseenter', e => {
            console.log(e.target.style.backgroundColor);

            // e.target.style.backgroundColor = "black";

            // e.target.style.backgroundColor = randomColor();

            console.log(+e.target.style.opacity);
            let currentOpacity = +e.target.style.opacity + 0.1;
            e.target.style.opacity = `${currentOpacity}`;
                
        });
    });

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

function randomColor () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

// START

let newDrawingBtn = document.querySelector(".new-drawing");
newDrawingBtn.addEventListener('click', newDrawing);

plotGrid(10);



