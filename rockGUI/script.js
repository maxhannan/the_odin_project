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
            document.getElementById("outcome").innerHTML="<div style = ' height: 30%; display: flex; flex-direction:row;'><img src='rock2.png' style = 'width:30%; align-self:baseline;padding-top:5%;'/><h2> < </h2><img src='paper2.png' style = 'align-self:baseline;width:30%;'/></div>";
        }else if(comp == 'scissors'){
            document.getElementById("outcome").innerHTML="<div style = ' height: 30%; display: flex; flex-direction:row;'><img src='rock2.png' style = 'width:30%;align-self:baseline;padding-top:5%; '/><h2> > </h2><img src='scissors2.png' style = 'width:30%;align-self:baseline;'/></div>";
  
        }else{
            document.getElementById("outcome").innerHTML="<div style = ' height: 30%; display: flex; flex-direction:row;'><img src='rock2.png' style = 'width:30%;align-self:baseline;padding-top:5%;'/><h2>=</h2><img src='rock2.png' style = 'width:30%;align-self:baseline;'/></div>";
 
        }
    }
    if(player == 'paper'){
        if(comp == 'rock'){
            document.getElementById("outcome").innerHTML="<div style = ' height: 30%; display: flex; flex-direction:row;'><img src='paper2.png' style = 'width:30%; align-self:baseline;padding-top:5%;'/><h2> > </h2><img src='rock2.png' style = 'align-self:baseline;width:30%;'/></div>";
        }else if(comp == 'scissors'){
            document.getElementById("outcome").innerHTML="<div style = ' height: 30%; display: flex; flex-direction:row;'><img src='paper2.png' style = 'width:30%;align-self:baseline;padding-top:5%; '/><h2> < </h2><img src='scissors2.png' style = 'width:30%;align-self:baseline;'/></div>";  
        }else{
            document.getElementById("outcome").innerHTML="<div style = ' height: 30%; display: flex; flex-direction:row;'><img src='paper2.png' style = 'width:30%;align-self:baseline;padding-top:5%;'/><h2>=</h2><img src='paper2.png' style = 'width:30%;align-self:baseline;'/></div>";
 
        }   

}
    if(player == 'scissors'){
        if(comp == 'rock'){
            document.getElementById("outcome").innerHTML="<div style = ' height: 30%; display: flex; flex-direction:row;'><img src='scissors2.png' style = 'width:30%; align-self:baseline;padding-top:5%;'/><h2> < </h2><img src='rock2.png' style = 'align-self:baseline;width:30%;'/></div>";
        }else if(comp == 'paper'){
            document.getElementById("outcome").innerHTML="<div style = ' height: 30%; display: flex; flex-direction:row;'><img src='scissors2.png' style = 'width:30%;align-self:baseline;padding-top:5%; '/><h2> > </h2><img src='paper2.png' style = 'width:30%;align-self:baseline;'/></div>";  

        }else{
            document.getElementById("outcome").innerHTML="<div style = ' height: 30%; display: flex; flex-direction:row;'><img src='scissors2.png' style = 'width:30%;align-self:baseline;padding-top:5%;'/><h2>=</h2><img src='scissors2.png' style = 'width:30%;align-self:baseline;'/></div>";

    }   

}
}
function gameOver(){
    playerScore = 0;
    compScore = 0;
    el_cs.innerHTML = ' ' + compScore;
    el_ps.innerText = ' ' +playerScore;
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
    if(playerScore > 4 || compScore > 4){
        el_down.innerHTML = 'GAME OVER'; 
        el_oc.innerHTML = ' ' ;
        gameEnd = true;
        return undefined;
    }
    el_cs.innerHTML = ' ' + compScore;
    el_ps.innerText = ' ' +playerScore;
 
    el_down.innerHTML = op[0]; 
   
    addimage(x, compMove);

}        
