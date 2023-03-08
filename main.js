let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const player = document.querySelector("#player-score");
const computer = document.querySelector('#computer-score');
const select = document.querySelector('#select');
const output = document.querySelector("#output");
player.textContent = `Player Score: ${playerScore}`;
computer.textContent = `Computer Score: ${computerScore}`;
output.textContent = "May the Best Person Win!"
select.textContent = "Good Luck!"




function playRound(playerSelection) {
    let computerSelection = getComputerInput();
   

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        ++playerScore
        const player = document.querySelector("#player-score");
       player.textContent = `Player Score: ${playerScore}`;
       select.textContent = "You chose " + playerSelection + ". The Computer chose " + computerSelection + ". You Won!";
        }
        
    else if (playerSelection == computerSelection){
        select.textContent = "You chose " + playerSelection + ". The Computer chose " + computerSelection + ". You Tied!";
       
        
    }

    else {
        ++computerScore
        const computer = document.querySelector("#computer-score");
        computer.textContent = `Computer Score: ${computerScore}`;
        select.textContent = "You chose " + playerSelection + ". The Computer chose " + computerSelection + ". You Lost!";
        
    
    }

    if (playerScore == 5){
        output.textContent = "You won the game! Congrats! Refresh to rematch!";
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
        disableBtn();
        
        
    }
    else if (computerScore == 5){
        output.textContent = "You lost the game! Can't beat a computer? Refresh to rematch!"
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
        
        disableBtn();
    }
}
        



function getComputerInput (){

    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.id)
    })

})

function disableBtn() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}