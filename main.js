// make a function getCompiterChoice that will
//randomly return "rock", "paper" or "scissors"

function getComputerChoice(){
    let x = Math.floor(Math.random()*3); // random number from 0 to 2
    if (x === 0) {
        return "rock";
    } else if (x === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}



// make a function getHumanChoice that will 
// prompt user to input a case senstive choice

function getHumanChoice(){
   let x = prompt("Choose: rock, paper, scissors?");

   if (x === null){
    return "Invalid choice";
   }

   if (x !== "rock" && x !== "paper" && x !== "scissors"){
    return "Invalid choice";
   }

   return x;
}



// make scores for each functions and set their
// values to 0

let computerScore = 0;
let humanScore = 0;

//make a playRound function with the human and
//computer choices as parameters
// add a point to the winner of the round

function playRound(human, computer){
    if (human === "Invalid choice"){
        console.log("Please enter rock, paper, or scissors")
        return;
    }

    if (human === computer){
        console.log("It's a draw!");
        return;
    }

    if(
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ){
        humanScore++;
        console.log(`You win! ${human} beats ${computer}.`)
    } else {
        computerScore++;
        console.log(`You lose! ${computer} beats ${human}.`)
    }
}



// make a function that class playRound 5 times
//

function playGame() {
    for (let i = 0; i < 5; i++) {
        let human = getHumanChoice();
        let computer = getComputerChoice();

        playRound(human, computer);
        console.log(`Score: Human ${humanScore} - ${computerScore} Computer\n`);
    }

    // Announce the final winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game. Better luck next time!");
    } else {
        console.log("It's a tie overall!");
    }
}

// Start the game
playGame();
