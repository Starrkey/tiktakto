  
  "use strict";


const landingPage = document.querySelector('.landing-page');
  const grid = document.createElement('div');
  grid.id = 'grid';

  const board = Array(30 * 30).fill(''); // 30x30 grid state
  let currentPlayer = 1; // Player X starts (1 = X, 2 = O)

  // Create the 30x30 grid
  for (let i = 0; i < 400; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    grid.appendChild(cell);

    // Add click event to each cell
    cell.addEventListener('click', () => {
      if (board[i] === '') {
        board[i] = currentPlayer;
        
        // Set the text and color based on current player
        if (currentPlayer === 1) {
          cell.textContent = 'X';
          cell.style.color = 'red'; // Set X color to red
        } else {
          cell.textContent = 'O';
          cell.style.color = 'blue'; // Set O color to blue
        }

        // Switch the current player (1 -> 2 or 2 -> 1)
        currentPlayer = currentPlayer === 1 ? 2 : 1;
      }
    });
  }

  landingPage.appendChild(grid);