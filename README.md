# Rock, Paper, Scissors JavaScript Labs

## To run the app
1. `cd server`
2. `npm install`
3. `cd ..`
4. `npm start`
5. It will tell you that it is listening on port 3001.
6. Open a browser and visit http://localhost:3001

## Introduction
- Take a look at the HTML, CSS, and JavaScript starters provided to you. Make sure you have the gist of what they're doing to begin with.
- Note that we've already provided you with most of the DOM manipulation. We've created some DOM elements and some click event handlers.
- You also already have an array called handChoices.

## Variables Lab
Estimated time: 30 minutes
- Create two new variables called computerHand and humanHand. Initialize them to "".
- Create a function called `showHands` that will display computerHand in the computerHandDiv and humanHand in the humanHandDiv. Test it out with some hardcoded values to make sure you're seeing them on the page.
- Call `showHands()` when the newGameButton is clicked.
- Create a function called `selectRockPaperOrScissors`. It should randomly return 'Rock', 'Paper', or 'Scissors'. Test this out to make sure you're getting fairly random results.
- When the humanHandDiv is clicked, use selectRockPaperOrScissors() to populate the computerHand, then to populate the humanHand. Then display their values by calling showHands().

## Operators Lab
Estimated time: 20 minutes
- Create a function called `checkWinner()`. Make it evaluate the computerHand and the humanHand.
- If the computer won, the resultSection should say "Computer wins". If the human won, resultSection should say "You win". And if it is a tie, say so in resultSection.
- Call this function after the hands have been set in humanHandDiv's click event handler.

## Arrays Lab
Estimated time: 30 minutes
- Create a new function called saveResult()
- In it, save game in an object like `{computer: "Rock", human: "Scissors", dateTime: <current> }`
- Add this to an array called `results`
- Display each result in the scoreboard `<section>`, including who won.
- Display the overall record with the winner first: "Computer 10, Human 8"
- Call this function after each game is played.
- Note: Each time you refresh, the old results are forgotten. That's perfectly fine at this point.

## Modules Lab
Estimated time: 15 minutes
- Split the one index.js JavaScript file into multiple smaller ones.
- Load the index.js in your index.html
- Import the other parts into the main index.js
- Make sure they all still work

## Ajax and Async Lab
Estimated time: 15 minutes
- Instead of getting the players' choices randomly, use the API server to do it.
- Notice that if you visit http://localhost:3001/rock-paper-scissors , the API server will give you one of the three choices.
- Change your web app to get the computer's choice and the human's choice from that API service instead of randomly choosing on the client side.
- Delete your selectRockPaperOrScissors function entirely to prove that it is getting its data from the API service.

## Functional JavaScript Lab
Estimated time: 5 minutes
- Convert your traditional function to arrow functions

## Object-oriented JavaScript Lab
Estimated time: 15 minutes
- Create a `Results` class and use it in place of your ad-hoc results object
- Make sure it has a constructor that takes in the human's hand, and the computer's hand. It should then set the date property to current.

## To see the solution
- Checkout the `solution` branch via `git branch solution`

## Extra credit
- Generate some images to use for Rock, Paper, and Scissors and display those instead of the text.
- Amend your finished game to play [Rock, Paper, Scissors, Lizard, Spock](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock)
- Save the results array into localStorage. Read results on page load and save it on page unload.

