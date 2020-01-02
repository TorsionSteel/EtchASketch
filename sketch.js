/* 
Intelegence behind Etch A Sketch website.
*/
let gridSize = 16;

document.body.onload = createGrid;

const grid = document.getElementById('grid');

console.log(grid);

//document.body.onload = createGrid;

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

    // let rowHeight = 1/gridSize; // Calculates height and width as percentage of number of grids.
    // let columnWidth = 1/gridSize;

    // var style = document.createElement('style');
    // document.head.appendChild(style);
    // style.sheet.insertRule('.row'{height: rowHeight});

}


function setColor() {

}

function resetGrid() {

}

function hoverGrid() {

}

createGrid(gridSize);