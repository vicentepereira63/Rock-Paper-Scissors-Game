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
  humanChoice =
    humanChoice.toUpperCase().at() + humanChoice.slice(1).toLowerCase();
  return humanChoice;
}
function playRound(ComputerChoice, humanChoice) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  console.log("You've Choosed " + humanChoice);
  console.log("The computer choosed " + computerChoice);
  if (humanChoice == "Paper" && computerChoice == "Scissors") {
    console.log("You've Lost! Scissors beats Paper");
    computerScore = computerScore + 1;
  } else if (humanChoice == "Rock" && computerChoice == "Paper") {
    console.log("You've Lost! Paper beats Rock");
    computerScore = computerScore + 1;
  } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    console.log("You've Lost! Rock beats Scissors");
    computerScore = computerScore + 1;
  } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    console.log("You've Won! Scissors beats Paper");
    humanScore = humanScore + 1;
  } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    console.log("You've Won! Rock beats Scissors");
    humanScore = humanScore + 1;
  } else if (humanChoice == "Paper" && computerChoice == "Rock") {
    console.log("You've Won! Paper beats Rock");
    humanScore = humanScore + 1;
  } else {
    console.log("It was a Tie! Play again");
  }
}
function playGame() {
  playRound();
  console.log(
    `The Scoreboard is: Computer ${computerScore} - YOU ${humanScore}`
  );
  playRound();
  console.log(
    `The Scoreboard is: Computer ${computerScore} - You ${humanScore}`
  );
  playRound();
  console.log(
    `The Scoreboard is: Computer ${computerScore}- You ${humanScore}`
  );
  playRound();
  console.log(
    `The Scoreboard is: Computer ${computerScore} - You ${humanScore}`
  );
  playRound();
  console.log(
    `The Scoreboard is: Computer ${computerScore} - You ${humanScore}`
  );
}
let humanScore = 0;
let computerScore = 0;

playGame();
