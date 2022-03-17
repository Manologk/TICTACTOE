const X_CLASS = 'x'
const CIRCLE_CLASS = 'o'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restart')
const resetButton = document.getElementById('reset')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn

startGame()

restartButton.addEventListener('click', startGame)


//set up all the elements
function startGame() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}

function handleClick(e) {
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setBoardHoverClass()
  }
}


let xscore = document.querySelector('.xscore');
let oscore = document.querySelector('.oscore');
localStorage.setItem('xscore', 0);
localStorage.setItem('oscore', 0);
xscr = localStorage.getItem('xscore');
oscr = localStorage.getItem('oscore');

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = 'Draw!'
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O" : "X"} Wins!`
    if(circleTurn){;
      localStorage.oscore = parseInt(localStorage.oscore) + 1;
      oscore.textContent =  localStorage.oscore;
    }
    else{
      localStorage.xscore = parseInt(localStorage.xscore) + 1;
      xscore.textContent = localStorage.xscore;
    }
  }
  winningMessageElement.classList.add('show')
}

function isDraw() {
  //cell element doesnt have .every method, so we destruture so that we can use it
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  })
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}


function swapTurns() {
  circleTurn = !circleTurn
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS)
  board.classList.remove(CIRCLE_CLASS)
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}

function checkWin(currentClass) {
  //check if any of the winning combinations have been met
  //loop over the combinations and check if any are true
  return WINNING_COMBINATIONS.some(combination => {  
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}

