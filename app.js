
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random() * choices.length) + 1;
    
    if (randomChoice === 1) {
        return "Rock";
    } else if (randomChoice === 2) {
        return "Paper";
    } else
        return "Scissors";
};

//function game() {
function playRound(playerSelection, computerSelection) {
    const flexPlayerSelection = playerSelection.toLowerCase();
    const flexComputerSelection = computerSelection.toLowerCase();
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            return "It's a tie";
        } else if (computerSelection === "Paper") {
            return "Computer wins!";
        } else {
            return "Congratz, you win!";
        }
    }

    else if (playerSelection === "Paper") {
        if (computerSelection === "Paper") {
            return "It's a tie";
        } else if (computerSelection === "Scissors") {
            return "Computer wins";
        } else {
            return "Congratz, you win!";
        }
    }

    else if (playerSelection === "Scissors") {
        if (computerSelection === "Scissors") {
            return "It's a tie";
        } else if (computerSelection === "Rock") {
            return "Computer wins";
        } else {
            return "Congratz, you win!";
        }
    }
}

//};


const computerSelection = getComputerChoice();
const playerSelection = "Scissors";
console.log("Computer's Choice:", getComputerChoice());
console.log(playRound(playerSelection, computerSelection));