const OPTIONS = ['rock','paper','scissors'];


function getComputerChoice() {
    /// returns random of Rock Paper or Scissors
    ///  console.log(OPTIONS[Math.round(Math.random()*3)]); 

    return OPTIONS[Math.round(Math.random()*3)];
}


function getPlayerChoice() {
    /// gets choice from player

    let playerChoice = window.prompt("Rock or Paper or Scissors?");
    
    while (1==1){
        
        if ((playerChoice.toLowerCase() == 'rock') || (playerChoice.toLowerCase() == 'paper') || (playerChoice.toLowerCase() == 'scissors')) {
            ///console.log(playerChoice);
            return playerChoice.toLowerCase();
        }

        playerChoice = window.prompt("WRONG INPUT: Rock or Paper or Scissors?");
    }
   
    

}


function playRound(playerSelection, computerSelection) {
    /// plays round of Rock, Paper, Scissors and returns winned

    if ((playerSelection == 'rock') && (computerSelection == 'paper')) {
        return 'Computer wins, Paper beats Rock'
    }
    else if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
        return 'Player wins, Rock beats Scissors'
    }
    else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
        return 'Player wins, Paper beats rock'
    }
    else if ((playerSelection == 'paper') && (computerSelection == 'scissors')) {
        return 'Computer wins, Scissors beats paper'
    }
    else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) {
        return 'Computer wins, Rock beats Scissors'
    }
    else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
        return 'Player wins, Scissors beats Paper'
    }
    
    return `TIE ${playerSelection}, ${computerSelection}`;

}