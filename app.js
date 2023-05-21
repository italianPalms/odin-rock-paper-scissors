
let playerScore = 0
let computerScore = 0
const computerSelection = getComputerChoice().toLowerCase();
const playerSelection = prompt("Make your choice").toLowerCase();


function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * choices.length) + 1;
    
    if (randomChoice === 1) {
        return "rock";
    } else if (randomChoice === 2) {
        return "paper";
    } else
        return "scissors";
};


function getPlayerChoice() {
    let playerSelection = prompt("Make your choice");
    return getPlayerChoice
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "It's a tie";
        } else if (computerSelection === "paper") {
            return "Computer wins!";
        } else {
            return "Congratz, you win!";
        }
    }

    else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            return "It's a tie";
        } else if (computerSelection === "scissors") {
            return "Computer wins";
        } else {
            return "Congratz, you win!";
        }
    }

    else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            return "It's a tie";
        } else if (computerSelection === "rock") {
            return "Computer wins";
        } else {
            return "Congratz, you win!";
        }
    }
}

function game() {
    
}


console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log('Computer choice', computerSelection)