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
            console.log(playerChoice);
            return playerChoice.toLowerCase();
        }

        playerChoice = window.prompt("WRONG INPUT: Rock or Paper or Scissors?");
    }
   
    

}