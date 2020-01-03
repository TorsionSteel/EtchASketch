let gridSize = 16;

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

    colorColumn();
}
createGrid(gridSize);

// Grid size button function.
document.getElementById('butonGridSize').addEventListener('click', function () {
        removeElementsByClass('row');
        removeElementsByClass('column');    
        gridSize = prompt("How many grids?", 16);
        createGrid(gridSize);
    });
//Reset button function.
document.getElementById('buttonReset').addEventListener('click', function () {
        removeElementsByClass('row');
        removeElementsByClass('column');
        gridSize = 16;
        createGrid(gridSize);
    });

// Remove class elements for reset and gridSize button functions.
function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function colorColumn () {

    let colorSelect = document.getElementsByName('sketchColor');
    let selectedColor = 'black';

    for (let i = 0; i <colorSelect.length; i++){
        if(colorSelect[i].checked) {
            selectedColor = colorSelect[i].value;
        }
    }
    
    let cell = document.querySelectorAll('.column');
    switch (selectedColor) {
        case 'black':
            cell.forEach(pixel => {
                pixel.addEventListener('mouseenter', ()=> {
                    pixel.style.backgroundColor = 'black';
                });
            });
            break;

        case 'random':

            let randomColorArray = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];
            
            cell.forEach(pixel => {
                pixel.addEventListener('mouseenter', ()=> {
                    let randomColor = randomColorArray[Math.floor(Math.random()*randomColorArray.length)];
                    pixel.style.backgroundColor = randomColor;
                });
            });
            break;

        case 'fade':
            cell.forEach(pixel => {
                pixel.addEventListener('mouseenter', ()=> {
                    pixel.style.backgroundColor = 'black';
                    let currentOpacity = +pixel.style.opacity + 0.2;
                    pixel.style.opacity = currentOpacity;
                });
            });
            break;
    }
}

