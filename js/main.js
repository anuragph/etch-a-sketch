const defaultSize = 16

const erase = document.querySelector('.erase');
erase.addEventListener('click', eraseCanvas);

createCanvas(defaultSize);


function createCanvas(cellsPerSide) {
    const numberOfCells = cellsPerSide ** 2;

    const canvas = document.querySelector('.canvas');
    // Clear canvas (required after erase).
    canvas.innerHTML = '';

    // Create cells with event listeners.
    for(let i = 1; i <= numberOfCells; i++ ) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', () => draw(cell))

        canvas.appendChild(cell);
    }

    // Display cells in grid.
    canvas.style['display'] = 'grid';
    canvas.style['grid-template-columns'] = `repeat(${cellsPerSide}, auto)`;
}


// Draw feature.
function draw(onCell) {

    onCell.classList.add('active');
}


// Erase feature.
function eraseCanvas() {

    // User input.
    let newGrid = prompt('Choose size for new canvas');

    if (newGrid <= 0 || newGrid > 100) {
        newGrid = prompt('Please choose between 1 and 100')
    }

    createCanvas(newGrid);
}