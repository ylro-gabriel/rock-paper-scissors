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

