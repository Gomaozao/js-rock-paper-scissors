function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function getComputerChoice() {
    
    if (getRandomInt(3) == 0) {
        return 'Rock';
    }
    else if (getRandomInt(3) == 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
    


}

console.log(getComputerChoice());