const DEFAULT_VALUE = 16
const gridContainer = document.querySelector('.grid-container')
const resetButton = document.querySelector('.reset')
const rainbowButton = document.querySelector('.rainbow-mode')

function createDefaultGrid(sideLength) {
    
    for (let i = 0; i < sideLength**2; i++) {
        const gridItem = document.createElement('div')
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black'
        });
        rainbowButton.addEventListener('click', () => {
            gridItem.addEventListener('mouseover', () => {
                gridItem.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
            });
            
        })
        gridContainer.appendChild(gridItem)
        gridContainer.style.gridTemplate = `repeat(${sideLength}, 1fr) / repeat(${sideLength}, 1fr)`
    }
    
}

function resetGrid() {
    gridContainer.replaceChildren()
    let newSideLength
    do newSideLength = prompt('Enter new side length', 10) 
    while (newSideLength < 0 || newSideLength > 50)
    return newSideLength
}

createDefaultGrid(16)

resetButton.addEventListener('click', () => {   
    createDefaultGrid(resetGrid())
})


