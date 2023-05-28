

const computerSelection = getComputerChoice();



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
    //playerSelection = playerSelection.toLowerCase();
    //computerSelection = computerSelection.toLowerCase();

    let resultMsg = {};
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            resultMsg = "It's a tie";
        } else if (computerSelection === "paper") {
            resultMsg = "Computer wins!";
            computerScore += 1;
        } else {
            resultMsg = "Congratz, you win!";
            playerScore += 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            resultMsg = "It's a tie";
        } else if (computerSelection === "scissors") {
            resultMsg = "Computer wins";
            computerScore += 1;
        } else {
            resultMsg = "Congratz, you win!";
            playerScore += 1;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            resultMsg = "It's a tie";
        } else if (computerSelection === "rock") {
            resultMsg = "Computer wins";
            computerScore += 1;
        } else {
            resultMsg = "Congratz, you win!";
            playerScore += 1;
        }
    }
    return resultMsg;
}



function playGame() {
    const btns = document.querySelectorAll("button");
    btns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const playerSelection = event.target.id;
            const computerSelection = getComputerChoice();
            const roundResultMsg = playRound(playerSelection, computerSelection);
    
            resultMsg.textContent = "Result: " + roundResultMsg;
    
            contentYourChoice.textContent = "Your choice: " + playerSelection;
    
            contentComputerChoice.textContent = "Computer choice: " + computerSelection;
    
            computer.textContent = "Computer Score: " + computerScore;
    
            player.textContent = "Player Score: " + playerScore;

            let winnerMsg = {};
            if (playerScore === 5) {
                winnerMsg = "You win the game!";
            } else if (computerScore === 5) {
                winnerMsg = "Computer wins the game!";
            }
            if (playerScore === 5 || computerScore === 5) {
               winner.textContent = winnerMsg;
               button.style.display = none;
            }
        });
    });
   
    }; 
    playGame();

const container = document.querySelector(".container");

const resultMsg = document.createElement("div");
resultMsg.classList.add("resultMsg");
resultMsg.textContent = "Result: ";
container.appendChild(resultMsg);

const contentYourChoice = document.createElement("div");
contentYourChoice.classList.add("yourChoice");
contentYourChoice.textContent = "Your choice: ";
container.appendChild(contentYourChoice);

const contentComputerChoice = document.createElement("div");
contentComputerChoice.classList.add("computerChoice");
contentComputerChoice.textContent = "Computer choice: ";
container.appendChild(contentComputerChoice);

const player = document.createElement("div");
player.classList.add("player");
player.textContent = "Player Score: ";
container.appendChild(player);

const computer = document.createElement("div");
computer.classList.add("computer");
computer.textContent = "Computer Score: ";
container.appendChild(computer);

const winner = document.createElement("div");
winner.classList.add("winner");
winner.textContent = ""
container.appendChild(winner);





/*const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const playerSelection = event.target.id;
        const computerSelection = getComputerChoice();
        const roundResultMsg = playRound(playerSelection, computerSelection);

        resultMsg.textContent = "Result: " + roundResultMsg;

        contentYourChoice.textContent = "Your choice: " + playerSelection;

        contentComputerChoice.textContent = "Computer choice: " + computerSelection;

        computer.textContent = "Computer Score: " + computerScore;

        player.textContent = "Player Score: " + playerScore;

    });
});

*/


