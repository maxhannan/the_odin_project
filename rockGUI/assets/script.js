let moves = ['rock', 'paper', 'scissors'];
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function computerPlay(list){
    return moves[getRandomInt(0,list.length)];
}

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

let el_down = document.getElementById("GFG_DOWN");
let el_ps = document.getElementById("playerScore");
let el_cs = document.getElementById("compScore");
let el_oc = document.getElementById("outcome");

let playerScore = 0;
let compScore = 0;
let drawAmt = 0;

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
                            <h2> < </h2><img src='assets/rock.png' id = 'icons'/></div>`;
        }else if(comp == 'scissors'){
            el_oc.innerHTML=`<div id = 'outcomes'><img src='assets/paper.png' id = 'icons'/>
                            <h2> < </h2><img src='assets/scissors.png' id = 'icons'/></div>`;
        }else{
            el_oc.innerHTML=`<div id = 'outcomes'><img src='assets/paper.png' id = 'icons'/>
                            <h2> < </h2><img src='assets/paper.png' id = 'icons'/></div>`;
 
        }   

    }   
    if(player == 'scissors'){
        if(comp == 'rock'){
            el_oc.innerHTML=`<div id = 'outcomes'><img src='assets/scissors.png' id = 'icons'/>
                            <h2> < </h2><img src='assets/rock.png' id = 'icons'/></div>`;
        }else if(comp == 'paper'){
            el_oc.innerHTML=`<div id = 'outcomes'><img src='assets/scissors.png' id = 'icons'/>
                            <h2> < </h2><img src='assets/paper.png' id = 'icons'/></div>`;

        }else{
            el_oc.innerHTML=`<div id = 'outcomes'><img src='assets/scissors.png' id = 'icons'/>
                            <h2> < </h2><img src='assets/scissors.png' id = 'icons'/></div>`;

        }   
    }
}
function gameOver(){
    playerScore = 0;
    compScore = 0;
    el_cs.innerHTML = ' ' + compScore;
    el_ps.innerText = ' ' + playerScore;
    el_oc.innerHTML = ' ' ;
    el_down.innerHTML = 'NEW GAME'; 
    gameEnd = false;
}
let gameEnd = false;
function GFG_click(clicked) { 
    let x = clicked; 
    let compMove = computerPlay(moves);
    let op = playRound(compMove, x);
    if(gameEnd == false){
        if(op[0].includes('Win')){
            playerScore += 1;
        }else if(op[0].includes('Lose')){
            compScore += 1;
        }else{
            drawAmt += 1;
        }
    }
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
    el_down.innerHTML = op[0]; 
    addimage(x, compMove);
}        
