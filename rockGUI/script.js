let moves = ['rock', 'paper', 'scissors'];
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function computerPlay(list){
    return moves[getRandomInt(0,list.length)];
}
function checkValid(playerMove){
    return moves.includes(playerMove);
}

function playRound(computerSelection, playerSelection){
    if(playerSelection === computerSelection){
        return 'A Draw!';
    };
    if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            return 'Computer wins, paper beats rock!';
        }else{
            return 'Player wins, rock beats scissors!' ;
        };
    };
    if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            return 'Computer wins, scissors beats paper!';
        }else{
            return 'Player wins, paper beats rock!';
        };
    };
    if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            return 'Computer wins, rock beats scissors!';
        }else{
            return 'Player wins, scissors beats paper!';
        };
    };
};
var el_down = document.getElementById("GFG_DOWN");
function GFG_click(clicked) { 
    let x = clicked; 
    let compMove = computerPlay(moves);
    let op = playRound(compMove, x);
   
    el_down.innerHTML = op; 
    
}        
