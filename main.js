// make a function getCompiterChoice that will
//randomly return "rock", "paper" or "scissors"

function getComputerChoice(){
    x = Math.random();

    if(x <= 0.3){
        return "rock";
    } else if (x <= 0.6){
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());