function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {

    if (getRandomInt(3) == 0) {
        return 'rock';
    }
    else if (getRandomInt(3) == 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }

}

function rpsRound() {
    playerSelection = prompt("Write Rock, Paper or Scissors:");
    computerSelection = getComputerChoice();

    if (computerSelection.toLowerCase() == 'rock' && playerSelection.toLowerCase() == 'scissors') {
        return("Computer Won! Rock wins against Scissors!");
    }
    else if (computerSelection.toLowerCase() == 'rock' && playerSelection.toLowerCase() == 'paper') {
        return("Human Won! Paper wins against Rock!");
    }
    else if (computerSelection.toLowerCase() == 'scissors' && playerSelection.toLowerCase() == 'rock') {
        return("Human Won! Rock wins against Scissors!");
    }
    else if (computerSelection.toLowerCase() == 'paper' && playerSelection.toLowerCase() == 'rock') {
        return("Computer Won! Paper wins against Rock!");
    }
    else if (computerSelection.toLowerCase() == 'paper' && playerSelection.toLowerCase() == 'scissors') {
        return("Human Won! Scissors wins against Paper!");
    }
    else if (computerSelection.toLowerCase() == 'scissors' && playerSelection.toLowerCase() == 'paper') {
        return("Human Won! Paper wins against Scissors!");
    }
    else if (computerSelection.toLowerCase() == 'rock' && playerSelection.toLowerCase() == 'rock') {
        
        return ("DRAW! PLAY AGAIN!");
    }
    else if (computerSelection.toLowerCase() == 'paper' && playerSelection.toLowerCase() == 'paper') {
        return ("DRAW! PLAY AGAIN!");
    }
    else if (computerSelection.toLowerCase() == 'scissors' && playerSelection.toLowerCase() == 'scissors') {
        return ("DRAW! PLAY AGAIN!");
    }

}

function game() {

    for(let i = 0; i < 5; i++) {

        let result = rpsRound();

        console.log(result);
        
        if (result == "DRAW! PLAY AGAIN!") {

            i--;
                    
        }

    }  
}

console.log("Begin Game!");
game();