function getComputerChoice() {
  let computerGuess = Math.random() * 100;
  if (computerGuess <= 100 / 3) {
    console.log("Rock");
  } else if (computerGuess > 100 / 3 && computerGuess <= (100 / 3) * 2) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
  console.log(computerGuess);
}
