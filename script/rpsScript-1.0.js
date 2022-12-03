function getComputerChoice() {
let randomNum = Math.random(); //Generate random number between 0 and 1 and assign it to randomNum variable.
let computerDecision = undefined;

if (randomNum < 0.33) { //Assign rock, paper or scissors as a string to the computerDecision variable based upon the randomNum.
  computerDecision = "rock";
} else if (randomNum > 0.33 && randomNum < 0.66) {
  computerDecision = "paper";
} else {
  computerDecision = "scissors";
}

return computerDecision; //Return rock, paper or scissors!
}

function playRound(computerSelection, playerSelection) {
  if (playerSelection === computerSelection) { //Winning results first
    console.log("It's a tie break!"); //Log the outcome in the console
    playerWin = null; //Nobody wins, so we assign no value
  }else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! Rock beats scissors!");
    playerWin = true; //The player wins, so we assign true
  }else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! Scissors beat paper!");
    playerWin = true;
  }else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win! Paper beats rock!");
    playerWin = true;
  }else if (playerSelection === "rock" && computerSelection === "paper") { //Losing results
    console.log("You lose! Paper beats rock!");
    playerWin = false; //The player does not win, so we assign false
  }else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! Rock beats scissors!");
    playerWin = false;
  }else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! Scissors beats paper");
    playerWin = false;
  }else {
    console.log("Make sure you type Rock, paper or scissors!"); //In the case anything other than Rock, paper or scissors is entered by the user
    playerWin = null; //No-one wins
  }

return playerWin; //Return whether or not the player has won this round
}

playerSelection = prompt("Please enter rock, paper or scissors!");
playerSelection = playerSelection.toLowerCase();
computerSelection = getComputerChoice();
console.log(playRound(computerSelection, playerSelection));