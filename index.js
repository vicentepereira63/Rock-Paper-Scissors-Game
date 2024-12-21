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
  humanChoice = humanChoice.toUppercase(0) + humanChoice.toLowercase(0);
  return humanChoice;
}
function playround(humanChoice, computerChoice) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  console.log("You've Choosed" + humanChoice);
  console.log("The computer choose" + computerChoice);
  if (humanChoice == "Paper" && computerChoice == "Scissors") {
    console.log("You've Lost! Scissors beat Paper");
    computerScore = computerScore + 1;
  } else if (humanChoice == "Rock" && computerChoice == "Paper") {
    console.log("You've Lost! Paper beat Rock");
    computerScore = computerScore + 1;
  } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    console.log("You've Lost! Scissors beat Paper");
    computerScore = computerScore + 1;
  } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    console.log("You've Won! Scissors beat Paper");
    humanScore = humanScore + 1;
  } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    console.log("You've Won! Rock beat Scissors");
    computerScore = computerScore + 1;
  } else if (humanChoice == "Paper" && computerChoice == "Rock") {
    console.log("You've Won! Paper beat Rock");
    computerScore = computerScore + 1;
  } else {
    console.log("It was a Tie! Play again");
  }
}

const humanScore = 0;
const computerScore = 0;
