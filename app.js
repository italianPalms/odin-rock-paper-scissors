
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

const computerChoice = getComputerChoice();
console.log("Computer's choice", computerChoice);
