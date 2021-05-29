
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

const playerSelection = '';
const computerSelection = computerPlay();
console.log(game())

function playRound(playerSelection, computerSelection)
 {
playerSelection = playerSelection.toLowerCase()   

if (playerSelection == 'scissors' && computerSelection == 'rock'){
    return 'Rock beats Scissors You Lose!';
}
else if (playerSelection == 'scissors' && computerSelection == 'paper'){
    return 'Scissors Beats Papers You Win!!!';
 }
 else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
    return 'Tie try again';
 }
 else if (playerSelection == 'rock' && computerSelection == 'paper'){
    return 'Paper Beats Rock You Lose!';
 }
 else if (playerSelection == 'rock' && computerSelection == 'scissors'){
    return 'Rock beats Scissors You Win!!!';
 }
 else if (playerSelection == 'rock' && computerSelection == 'rock'){
    return 'Tie try again';
 }
 
 else if (playerSelection == 'paper' && computerSelection == 'rock'){
    return 'Paper Beats Rock You Win!!';   
}
else if (playerSelection == 'paper' && computerSelection == 'scissors'){
    return 'Scissors Beats Papers You Lose!';   
}
else if (playerSelection == 'paper' && computerSelection == 'paper'){
    return 'Tie try again';   

}
}
function game(){
 
    for (i = 0; i < 5; i++) {
    console.log(playRound(prompt( 'Choose Your Warrior'), computerPlay()));
    }   
}





 









// function playRound(playerSelection, computerSelection)
//     let rock = 1
//     let paper = 2;
//     let scissors = 3;
    
//     if (rock < paper){
//         console.log("You loose! Paper beats Rock")
//     }
//     else if (paper > rock){
//         console.log("You Win!! Paper beats Rock")
//     }
//     else if (rock == rock){
//         console.log("Tie Pick again")
//     }



// if ('rock' 'paper') {
   
//     return 'you loose';
// }
// else if (rock > paper) {
//     console.log('you Win')
// }
// else if (rock == rock) {
//     console.log('Tie')
// }
// else if (paper == paper) {
//     console.log('Tie')
// }

 
//  switch (playerSelection,computerSelection) {
     

//     case 'rock' == 'scissors' :
//         return 'Rock Beats Scissors You Win!';
//     break;
//     case 'rock' == 'paper' :
//         return 'Paper Beats Rock You Loose!';
//     break;
//     case 'paper' == 'scissors' :
//         return 'Scissors Beats Paper You Loose!';
//     break;
//     case 'paper' == 'rock' :
//         return 'Paper Beats Rock You Win!!';
//     break;
//     case 'scissors' == 'paper' :
//         return 'Scissors Beats Paper You Win!';
//     break;
//     case 'scissors' == 'rock' :
//         return 'Rock Beats Scissors You Loose!';
//     break;
//     case 'scissors' == 'scissors' :
//     case 'paper' == 'paper' :
//     case 'rock' == 'rock' :
//         return 'Rock Beats Scissors You Loose!';
//     break;

//  }
