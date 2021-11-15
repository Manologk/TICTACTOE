const X_CLASS = 'x';
const CIRCLE_CLASS ='o';
const cellElements = document.querySelectorAll('[data-cell]');
let circleTurn;


cellElements.forEach(cell =>{
    cell.addEventListener('click', handleClick, { once: true})
  })


function handleClick(e){
    //place the mark
    //check for draw
    // check for win
    //switch turns
    console.log("clicked")

//     const cell =  e.target;
//     const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS

//     placeMark(cell, currentClass);
//   }

// function placeMark(cell, currentClass){
//     cell.classList.add(currentClass);
}

