//make a rock paper scissors program
// get user input for each option
// get computer input for each option
// compare if/else for winning scenarios
// display results to user



function getComputerInput (){

    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

console.log(getComputerInput());




