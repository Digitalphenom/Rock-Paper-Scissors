




// let options = ['rock','paper','scissors']


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

    




function playRound(playerSelection, computerSelection)
 {
// How can I compare two strings to determine the winner?
if (playerSelection == 'scissors' && computerSelection == 'rock'){
    return 'Rock beats Scissors You loose!';
}
else if (playerSelection == 'rock' && computerSelection == 'scissors'){
    return 'Rock beats Scissors You Win!!';

}
 }


 const playerSelection = "scissors";
const computerSelection = computerPlay();
console.log(playRound('rock', 'scissors'))




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



// 