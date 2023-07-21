const newGameButton = document.querySelector("#newGame")
const resultSection = document.querySelector("#result")
const computerHandDiv = document.querySelector("#computerHand")
const humanHandDiv = document.querySelector("#humanHand")
const scoreboardSection = document.querySelector("#scoreboard")

// Initialize things
const handChoices = ['Rock', 'Paper', 'Scissors'];

/**
 * When clicked, clear both hands, select for the computer and tell the user we're ready for them
 */
newGameButton.addEventListener('click', () => {
  resultSection.innerText = "";
  computerHand = "Computer is choosing";
  humanHand = "Click here when ready";
})

/** 
 * When clicked, show computer's choice, select for the human and show it. Save results into an array
*/
humanHandDiv.addEventListener('click', () => {
})