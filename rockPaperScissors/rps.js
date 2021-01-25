let moves = ['rock', 'paper', 'scissors'];
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let gamend = false;
while(gamend === false){
    let playerMove = prompt('rock, paper or scissors? ').toLowerCase();
    let compMove = moves[getRandomInt(0,3)];
    console.log(`Player move: ${playerMove}, Computer move: ${compMove}`);
    let validAnswer = moves.includes(playerMove);
    if (validAnswer === false){
        console.log(`Enter a valid answer! ${'"'+playerMove+'"'} is not one of the options!`);
        continue;
    };   
    if(playerMove === compMove){
        console.log('A Draw!');
        continue;
    };
    if(playerMove === 'rock'){
        if(compMove === 'paper'){
            console.log('Computer wins, paper beats rock!');
            break;
        }else{
            console.log('Player wins, rock beats scissors!');
            break;
        };
    };
    if(playerMove === 'paper'){
        if(compMove === 'scissors'){
            console.log('Computer wins, scissors beats paper!');
            break;
        }else{
            console.log('Player wins, paper beats rock!');
            break;
        };
    };
    if(playerMove === 'scissors'){
        if(compMove === 'rock'){
            console.log('Computer wins, rock beats scissors!');
            break;
        }else{
            console.log('Player wins, scissors beats paper!');
            break;
        };
    };
};