

const computerSelection = getComputerChoice().toLowerCase();

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

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("It's a tie");
        } else if (computerSelection === "paper") {
            console.log("Computer wins!");
            computerScore += 1;
        } else {
            console.log("Congratz, you win!");
            playerScore += 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            console.log("It's a tie");
        } else if (computerSelection === "scissors") {
            console.log("Computer wins");
            computerScore += 1;
        } else {
            console.log("Congratz, you win!");
            playerScore += 1;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            console.log("It's a tie");
        } else if (computerSelection === "rock") {
            console.log("Computer wins");
            computerScore += 1;
        } else {
            console.log("Congratz, you win!");
            playerScore += 1;
        }
    }
}

function playGame() {
    if (roundsPlayed < 5) {
        const playerSelection = prompt("Make you choice");
        console.log("Your choice", playerSelection);
        const computerSelection = getComputerChoice();
        console.log("Computer choice", computerSelection);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        console.log(playerScore);
        console.log(computerScore);

        roundsPlayed++;
        playGame();
    } else {
        console.log("Player Score:", playerScore);
        console.log("Computer Score:", computerScore);
    }
}

playGame();