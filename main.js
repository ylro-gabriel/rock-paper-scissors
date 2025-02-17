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



// make a function getHumanChoice that will 
// prompt user to input a case senstive choice

function getHumanChoice(){
    x = prompt("Choose: rock, paper, scissors?");
    return x.toLowerCase();
}



// make scores for each functions and set their
// values to 0

let computerScore = 0;
let humanScore = 0;

//make a playRound function with the human and
//computer choices as parameters
// add a point to the winner of the round

function playRound(human, computer){
    human = getHumanChoice();
    computer = getComputerChoice();

    if(human == "rock" && computer == "paper"){
        return computerScore++;
    } else if(human == "rock" && computer == "scissors"){
        return humanScore++;
    } else if(human == "paper" && computer == "rock"){
        return humanScore++;
    } else if(human == "paper" && computer == "scissors"){
        return computerScore++;
    } else if(human == "scissors" && computer == "rock"){
        return computerScore++;
    } else if(human == "scissors" && computer == "paper"){
        return humanScore++;
    }   else{
        return "Draw";
    } 
}

// make a function that cllas playRound 5 times
//

function playGame(){
    
}

playGame();