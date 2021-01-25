const rows = 16;
const columns = 16;
const numberOfCells = rows * columns;

const canvas = document.querySelector('.canvas');

// Create cells and add them to canvas.
for(let i = 1; i <= numberOfCells; i++ ) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    canvas.appendChild(cell);
}

// Display cells in grid.
canvas.style['display'] = 'grid';
canvas.style['grid-template-columns'] = `repeat(${columns}, auto)`;
canvas.style['grid-template-rows'] = `repeat(${rows}, auto)`;
