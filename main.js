let playerScore = 0;
let computerScore = 0;




function game() {
    for (let i = 0; i<=5; i++) {
        
        console.log(playRound());
        console.log("Player: " + playerScore ,"Computer: " + computerScore)

        }
        if (playerScore > computerScore){
            console.log("Game over, You Win!")}
        
            else{ 
                console.log("Game over, You Lose!")

            }


        }
    


game();


function playRound() {
    let computerSelection = getComputerInput();
    let playerSelection = prompt("Please enter Rock, Paper, or Scissors.").toLowerCase();
    

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        ++playerScore
       return "You Win!"
        }
        
    else if (playerSelection == computerSelection){
        return "It's a Tie!"
    }

    else {
        ++computerScore
        return "You Lose!"
        
    
    }
}


function getComputerInput (){

    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}








