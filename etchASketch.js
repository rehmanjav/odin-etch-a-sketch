"use strict";

function plotGrid (n) {
    let container = document.querySelector(".container");
    

    for (let i = 0; i < n**2; i++) {
        let height = 960 / (n);
        let newDiv = document.createElement('div');
        newDiv.classList.add('pixel');
        newDiv.style.width = `${height}px`;
        newDiv.style.height = `${height}px`;
        container.appendChild(newDiv);
    }


}

// START

plotGrid(16);

