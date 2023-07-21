const newGameButton = document.querySelector("#newGame")
const resultSection = document.querySelector("#result")
const computerHandDiv = document.querySelector("#computerHand")
const humanHandDiv = document.querySelector("#humanHand")
const scoreboardSection = document.querySelector("#scoreboard")

// Initialize things
const handChoices = ['Rock', 'Paper', 'Scissors'];
let computerHand = "";
let humanHand = "";

/**
 * When clicked, clear both hands, select for the computer and tell the user we've chosen
 */
newGameButton.addEventListener('click', () => {
  resultSection.innerText = "";
  computerHand = "Computer is choosing";
  humanHand = "Click here when ready";
  showHands();
})

/** 
 * When clicked, show computer's choice, select for the human and show it. Save results into an array
*/
humanHandDiv.addEventListener('click', () => {
  computerHand = selectRockPaperOrScissors();
  humanHand = selectRockPaperOrScissors();
  showHands();
  checkWinner();
})

// display the hands
function showHands() {
  computerHandDiv.innerText = computerHand;
  humanHandDiv.innerText = humanHand;
}

function checkWinner() {
  if (computerHand === humanHand) {
    resultSection.innerText = "It's a tie"
  } else if (computerHand === "Rock" && humanHand === "Scissors") {
    resultSection.innerText = "Computer wins"
  } else if (computerHand === "Paper" && humanHand === "Rock") {
    resultSection.innerText = "Computer wins"
  } else if (computerHand === "Scissors" && humanHand === "Paper") {
    resultSection.innerText = "Computer wins"
  } else {
    resultSection.innerText = "You win"
  }
}

// get a random element from the array of handChoices
function selectRockPaperOrScissors() {
  return handChoices[Math.floor(Math.random() * handChoices.length)]
}