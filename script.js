const container = document.querySelector('.container');
const header = document.querySelector('.header');

const newButton = document.createElement('button');
newButton.textContent='Reset';
newButton.addEventListener('click', gridSize => {
        do {
            gridSize= +(prompt('Enter grid side length (between 10 and 100)', 100));
            } while (gridSize < 10 || gridSize > 100);
            
            container.replaceChildren();
            generateGrid(gridSize);
});

header.appendChild(newButton);


function generateGrid(x) {

    let gridCell='';

    for (let i=0;i<x**2;++i) {
        gridCell+="<div class='gridCell'>hello</div>";
    }
    container.setAttribute(`style`, `grid-template: repeat(${x}, 1fr) / repeat(${x}, 1fr)`);
    container.innerHTML=gridCell;
}

generateGrid(16);
