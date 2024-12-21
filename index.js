function getComputerChoice() {
  let computerGuess = Math.random() * 100;
  if (computerGuess <= 100 / 3) {
    computerChoice = "Rock";
  } else if (computerGuess > 100 / 3 && computerGuess <= (100 / 3) * 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

function getHumanChoice() {
  humanChoice = prompt("Rock,Paper or Scissors?");
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;
