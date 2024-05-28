let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, target) {
    const humanDifference = Math.abs(target - humanGuess);
    const computerDifference = Math.abs(target - computerGuess);
  
    if (humanDifference === computerDifference) {
      // Pareggio
      updateScore('tie');
      return null;
    } else if (humanDifference < computerDifference) {
      return true; //user wins
    } else {
      return false; // computer wins
    }
}

function updateScore(winner) {
    if (winner === 'human') {
      humanScore += 1; // The user wins
    } else if (winner === 'computer') {
      computerScore += 1; // The computer wins
    } else {
        //updateScore('tie');
        alert("It's a tie!");
    }
}
  
function advanceRound() {
    currentRoundNumber += 1;
}

console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore},
            Current Round Number: ${currentRoundNumber}`);