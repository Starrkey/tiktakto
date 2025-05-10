  
  "use strict";


const landingPage = document.querySelector('.landing-page');
  const grid = document.createElement('div');
  grid.id = 'grid';
const size = 20;
  const board = new Array(size * size).fill(''); 
  let currentPlayer = 1;
  
  function checkWinner(row, col, currentPlayer){
// Directions to check: right, down, bottom-right diagonal, bottom-left diagonal
  const directions = [
    { r: 0, c: 1 },  // Right (horizontal)
    { r: 1, c: 0 },  // Down (vertical)
    { r: 1, c: 1 },  // Bottom-right diagonal
    { r: 1, c: -1 }, // Bottom-left diagonal
  ];

  // Iterate through all directions to check for winning streaks
  for (let { r, c } of directions) {
    let count = 1;  // Start with the current cell as part of the streak

    // Check one direction (e.g., right)
    let i = row + r;
    let j = col + c;
    while (i >= 0 && i < size && j >= 0 && j < size && board[i * size + j] === currentPlayer) {
      count++;
      i += r;
      j += c;
    }

    // Check the opposite direction (e.g., left if checking right)
    i = row - r;
    j = col - c;
    while (i >= 0 && i < size && j >= 0 && j < size && board[i * size + j] === currentPlayer) {
      count++;
      i -= r;
      j -= c;
    }

    // If we find 5 or more in a row, we have a winner
    if (count >= 5) {
      return true;  // Winner found
    }
  }

  return false;  // No winner found
  }


  for (let i = 0; i < 400; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    grid.appendChild(cell);

    cell.addEventListener('click', () => {
      if (board[i] === '') {
        board[i] = currentPlayer;
        
    
        if (currentPlayer === 1) {
          cell.textContent = 'X';
          cell.style.color = 'red'; 
        } else {
          cell.textContent = 'O';
          cell.style.color = 'blue'; 
        }
        const row = Math.floor(i / size);  
        const col = i % size;    

        console.log(`Player ${currentPlayer === 1 ? 'X' : 'O'} clicked at row: ${row}, column: ${col}`);
        if (checkWinner(row,col,currentPlayer)){
              alert(`${currentPlayer === 1 ? 'X' : 'O'} Wins!`);
        };
        currentPlayer = currentPlayer === 1 ? 2 : 1;
      }
    });
  }

  landingPage.appendChild(grid);
