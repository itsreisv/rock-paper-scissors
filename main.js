//make a rock paper scissors program
// get user input for each option
// get computer input for each option
// compare if/else for winning scenarios
// display results to user


function playRound() {
    let computerSelection = getComputerInput();
    let playerSelection = prompt("Please enter Rock, Paper, or Scissors.").toLowerCase();
  

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper"))
        return"You win!" + " " + (playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase());

    if (playerSelection == computerSelection){
        return "It's a tie!";
    }

    else {
        return "You Lose!" + " " + (computerSelection.toUpperCase() + "beats " + playerSelection.toUpperCase());

    }
}


        
console.log(playRound());



function getComputerInput (){

    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}








