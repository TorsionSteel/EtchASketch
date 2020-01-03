let gridSize = 50;

document.body.onload = createGrid;
const grid = document.getElementById('grid');

function createGrid(gridSize) {
    for(let x = 0; x < gridSize; x++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('row');
        grid.appendChild(newDiv);

        for(let y = 0; y <gridSize; y++) {
            let column = document.createElement('div');
            column.classList.add('column');
            newDiv.appendChild(column);
        }     
    }
}


function setColor() {

}

function resetGrid() {

}

function hoverGrid() {

}

createGrid(gridSize);