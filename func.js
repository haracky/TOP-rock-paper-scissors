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
        console.log('Computer wins, Paper beats Rock');
        return 'computer';
    }
    else if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
        console.log('Player wins, Rock beats Scissors');
        return 'player';
    }
    else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
        console.log('Player wins, Paper beats Rock');
        return 'player';
    }
    else if ((playerSelection == 'paper') && (computerSelection == 'scissors')) {
        console.log('Computer wins, Scissors beats Paper');
        return 'computer';
    }
    else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) {
        console.log('Computer wins, Rock beats Scissors');
        return 'computer';
    }
    else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
        console.log('Player wins, Scissors beats Paper');
        return 'player';
    }
    
    console.log(`TIE ${playerSelection}, ${computerSelection}`);
    return 'tie';

}


function game() {
    // plays 5 games of RPS Player vs Computer
    // counts score and report a winner

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        
        result = playRound(getPlayerChoice(), getComputerChoice());
        
        if (result == 'player') {
            playerScore += 1;
        }
        else if (result == 'computer') {
            computerScore += 1;
        }

        console.log(`Player: ${playerScore} - ${computerScore} Computer`);
    }
    if (playerScore > computerScore){
        console.log(`Player wins!!!\nPlayer: ${playerScore} - ${computerScore} Computer`);
    }
    else if (playerScore < computerScore){
        console.log(`Computer wins!!!\nPlayer: ${playerScore} - ${computerScore} Computer`);
    }
    else console.log(`TIE!!!\nPlayer: ${playerScore} - ${computerScore} Computer`);
}