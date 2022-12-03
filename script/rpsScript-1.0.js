function getComputerChoice() {
let randomNum = Math.random();
let computerDecision = undefined;

if (randomNum < 0.33) {
  computerDecision = "rock";
} else if (randomNum > 0.33 && randomNum < 0.66) {
  computerDecision = "paper";
} else {
  computerDecision = "scissors";
}

console.log(computerDecision);
}

getComputerChoice();