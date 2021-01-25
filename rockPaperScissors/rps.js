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
function game(rounds){
    let playerScore = 0;
    let compScore = 0;
    let draws = 0;
    for(let i = 0; i < rounds; i++){
        let playerMove = prompt('rock, paper or scissors? ').toLowerCase();
        let compMove = computerPlay(moves);
        result = playRound(compMove, playerMove);
        if(checkValid(playerMove) == false){
            console.log('Not Valid, Computer wins by default.');
            compScore +=1;
            continue;
        }
        if(result.includes('Player')){
            playerScore +=1;
        }else if(result.includes('Computer')){
            compScore +=1;
        }else{
            draws += 1;
        };
        console.log(result)};
    if(playerScore > compScore){
        console.log(`Player wins! It was ${playerScore} to ${compScore}`);
        console.log(`There was ${draws} draw(s)`);
    }else if(playerScore < compScore){
        console.log(`Computer wins! It was ${compScore} to ${playerScore}`);
        console.log(`There was ${draws} draw(s)`);
    }else{
        console.log(`A Tie! It was ${playerScore} to ${compScore}`);
        console.log(`There was ${draws} draw(s)`);
    };
};
rounds = prompt('How many rounds would you like to play? ');
game(parseInt(rounds));