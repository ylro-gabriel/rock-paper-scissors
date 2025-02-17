// make a function getCompiterChoice that will
//randomly return "rock", "paper" or "scissors"

function getComputerChoice(){
    x = Math.random() * (3 - 0) + 0;

    if(x <= 1){
        return "rock";
    } else if (x <= 2){
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());

// make a function getHumanChoice that will 
// prompt user to input a case senstive choice

function getHumanChoice(){
    x = prompt("Choose: rock, paper, scissors?");
    return x;
}

console.log(getHumanChoice()); 

// make scores for each functions and set their
// values to 0

let computerScore = 0;
let humanScore = 0;