
// Rock Paper Scissors

function computerPlay(){

let  computerOption = Math.floor(Math.random()*3)

if (computerOption === 0) {
    return 'rock'
}
else if (computerOption === 1){
    return 'paper'
}
else if (computerOption === 2){
    return 'scissors'
}
}

let p1Score = 0
let cpuScore = 0
const playerSelection = '';
const computerSelection = computerPlay();
console.log(game())


function playRound(playerSelection, computerSelection)
 {
  
playerSelection = playerSelection.toLowerCase()   

if (playerSelection == 'scissors' && computerSelection == 'rock'){
    return `Rock beats Scissors You Lose! PlayerOne ${p1Score} Computer ${++cpuScore}`;
}
else if (playerSelection == 'scissors' && computerSelection == 'paper'){
    return `Scissors Beats Papers You Win!!! PlayerOne ${++p1Score} Computer ${cpuScore}`;
 }
 else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
    return 'Tie try again';
 }
 else if (playerSelection == 'rock' && computerSelection == 'paper'){
    return `Paper Beats Rock You Lose! PlayerOne ${p1Score} Computer ${++cpuScore}`;
 }
 else if (playerSelection == 'rock' && computerSelection == 'scissors'){
    return `Rock beats Scissors You Win!!! Player One ${++p1Score} Computer ${cpuScore}`;
 }
 else if (playerSelection == 'rock' && computerSelection == 'rock'){
    return 'Tie try again';
 }
 
 else if (playerSelection == 'paper' && computerSelection == 'rock'){
    return `Paper Beats Rock You Win!! PlayerOne ${++p1Score} Computer ${cpuScore}`;   
}
else if (playerSelection == 'paper' && computerSelection == 'scissors'){
    return `Scissors Beats Papers You Lose! PlayerOne ${p1Score} Computer ${++cpuScore}`;   
}
else if (playerSelection == 'paper' && computerSelection == 'paper'){
    return 'Tie try again';   

}
}

function game(){
 
    for (i = 0; i < 5; i++) {
    console.log(playRound(prompt( 'Choose Your Warrior'), computerPlay()))
    }
  
}
if (p1Score >= 3) {
    console.log('Congratulations You Won The Game!!')
}

else if (cpuScore >= 3){
console.log('Sorry you loose, try again?')
}
else if (cpuScore == p1Score) {
    console.log("Its a tie try again?")
}
   

