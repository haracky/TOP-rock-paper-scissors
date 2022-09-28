const OPTIONS = ['Rock','Paper','Scissors'];

function getComputerChoice() {
    option = Math.round(Math.random()*3);
    console.log(OPTIONS[option]);
}