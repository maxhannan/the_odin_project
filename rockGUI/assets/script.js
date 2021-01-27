// Array of possible moves for computer to select
let moves = ['rock', 'paper', 'scissors'];
// Gets random whole number, min = inclusive, max = exclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}
// Computer uses randomint function to select a move
function computerPlay(list){
    return moves[getRandomInt(0,list.length)];
}
// Plays one round, and returns an outcome
function playRound(computerSelection, playerSelection){
    if(playerSelection === computerSelection){
        return ['A Draw!'];
    };
    if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            return ['You Lose!',  'Paper beats Rock'];
        }else{
            return ['You Win!',  'Rock beats Scissors'] ;
        };
    };
    if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            return ['You Lose!', 'Scissors beats Paper'];
        }else{
            return ['You Win!',  'Paper beats Rock'];
        };
    };
    if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            return ['You Lose!',  'Rock beats Scissors'];
        }else{
            return ['You Win!',  'Scissors beats Paper'];
        };
    };
};
// Store elements of DOM for results to live
let el_down = document.getElementById("GFG_DOWN");
let el_ps = document.getElementById("playerScore");
let el_cs = document.getElementById("compScore");
let el_oc = document.getElementById("outcome");
// Initialize score variables
let playerScore = 0;
let compScore = 0;
// Displays correct logos in result window based on result. 
function  addimage(player, comp){
    if(player == 'rock'){
        if(comp == 'paper'){
            el_oc.innerHTML=`<div id = 'outcomes'><img src='assets/rock.png' id = 'icons'/>
                            <h2> < </h2><img src='assets/paper.png' id = 'icons'/></div>`;
        }else if(comp == 'scissors'){
            el_oc.innerHTML=`<div id = 'outcomes'><img src='assets/rock.png' id = 'icons'/>
                            <h2> > </h2><img src='assets/scissors.png' id = 'icons'/></div>`;
  
        }else{
            el_oc.innerHTML=`<div id = 'outcomes'><img src='assets/rock.png' id = 'icons'/>
                            <h2>=</h2><img src='assets/rock.png' id = 'icons'/></div>`;
 
        }
    }
    if(player == 'paper'){
        if(comp == 'rock'){
            el_oc.innerHTML=`<div id = 'outcomes'><img src='assets/paper.png' id = 'icons'/>
                            <h2> > </h2><img src='assets/rock.png' id = 'icons'/></div>`;
        }else if(comp == 'scissors'){
            el_oc.innerHTML=`<div id = 'outcomes'><img src='assets/paper.png' id = 'icons'/>
                            <h2> < </h2><img src='assets/scissors.png' id = 'icons'/></div>`;
        }else{
            el_oc.innerHTML=`<div id = 'outcomes'><img src='assets/paper.png' id = 'icons'/>
                            <h2> = </h2><img src='assets/paper.png' id = 'icons'/></div>`;
 
        }   

    }   
    if(player == 'scissors'){
        if(comp == 'rock'){
            el_oc.innerHTML=`<div id = 'outcomes'><img src='assets/scissors.png' id = 'icons'/>
                            <h2> < </h2><img src='assets/rock.png' id = 'icons'/></div>`;
        }else if(comp == 'paper'){
            el_oc.innerHTML=`<div id = 'outcomes'><img src='assets/scissors.png' id = 'icons'/>
                            <h2> > </h2><img src='assets/paper.png' id = 'icons'/></div>`;

        }else{
            el_oc.innerHTML=`<div id = 'outcomes'><img src='assets/scissors.png' id = 'icons'/>
                            <h2> = </h2><img src='assets/scissors.png' id = 'icons'/></div>`;

        }   
    }
}
// Function triggered by reset button, resets all outputs to empty
function gameOver(){
    playerScore = 0;
    compScore = 0;
    el_cs.innerHTML = ' ' + compScore;
    el_ps.innerText = ' ' + playerScore;
    el_oc.innerHTML = ' ' ;
    el_down.innerHTML = 'NEW GAME'; 
    gameEnd = false;
}
// initialize game end variable to be used as condition.
let gameEnd = false;
// updates scores if game is not over
function updateScore(output){
    if(gameEnd == false){
        if(output[0].includes('Win')){
            playerScore += 1;
        }else if(output[0].includes('Lose')){
            compScore += 1;
        }
    } 
}
// function that outputs info to dom
function outputGame(playerMove, compMove, output){
    el_cs.innerHTML = ' ' + compScore;
    el_ps.innerText = ' ' +playerScore;
    if(playerScore > 4 ){
        el_down.innerHTML = 'PLAYER WINS!'; 
        el_oc.innerHTML = ' ' ;
        gameEnd = true;
        return undefined;
    }
    if(compScore > 4){
        el_down.innerHTML = 'COMPUTER WINS'; 
        el_oc.innerHTML = ' ' ;
        gameEnd = true;
        return undefined;
    }
    el_cs.innerHTML = ' ' + compScore;
    el_ps.innerText = ' ' +playerScore;
    el_down.innerHTML = output[0]; 
    addimage(playerMove, compMove);
}
// function takes user click, plays a round and outputs info to dom.

function GFG_click(clicked) { 
    // get input from player
    let player = clicked; 
    // get move from computer
    let compMove = computerPlay(moves);
    // get result of matchup
    let op = playRound(compMove, player);
    // update score
    updateScore(op)
    // write to dom
    outputGame(player, compMove, op)
}        
