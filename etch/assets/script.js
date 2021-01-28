let gridSize = 16;
window.open = grid(gridSize);
const main = document.getElementById('main');
let boxes = document.getElementsByClassName('box');
let boxList = Array.from(boxes);
let gridOn = true;
let colorPicker = document.getElementById('cp');
let hex = 'red';
// color picker
// var colorPicker = new iro.ColorPicker('#picker');
colorPicker.addEventListener("input", watchColorPicker, false);

function watchColorPicker(event) {
    hex = event.target.value;
    console.log(hex);
    
    colorPick();

}
Array.from(boxes).forEach(v => v.addEventListener('mouseover', function() {
    v.style.background = 'black';
  }));

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}
function grid(width){
    var main = document.getElementById('main');
    main.style.gridTemplateColumns = `repeat(${width}, 1fr)`
    main.style.gridTemplateRows = `repeat(${width}, 1fr)`
    
    for (var i=0; i<width; i++) {
        for (var j=0; j<width; j++) {
        var box = document.createElement("div");
        box.className = "box";
        main.appendChild(box);
        }
        
    } 
    
}

function randColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
} 

function newBoard(width){
    main.innerHTML = ''
    grid(width);
    let boxes = document.getElementsByClassName('box');
    Array.from(boxes).forEach(v => v.addEventListener('mouseover', function() {
        v.style.background = 'black';
      }));

};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function shake(){
    main.classList.add('shake'); 
    await sleep(500);
    main.classList.remove('shake'); 
}

function gridChange() {
    let validInput = false;
    gridSize = prompt('Grid Size (2-100)');
    
    while(validInput == false){
        if(gridSize === null || gridSize == ''){
            gridSize = 16;
        }else if(gridSize >= 2 && gridSize <= 100){
            validInput = true;
        }else{
            gridSize = prompt('Please enter a valid grid size.');
            continue;
        }
    }
    if(gridSize < 2 || gridSize > 100){

    }
    newBoard(gridSize)
    shake();
    gridReverse()
    gridTog() 
    blackPick()
}

function gridTog() {
    let boxList = Array.from(boxes)
    if(gridOn === true){
        for(let i = 0; i < boxList.length; i++){
            boxList[i].style.border = 'gray 0px solid';
            document.querySelector('#gridTog').innerHTML = 'Grid On';
            gridOn = false;
        }
    }else{
        for(let i = 0; i < boxList.length; i++){
            boxList[i].style.border = 'gray 1px solid';
            document.querySelector('#gridTog').innerHTML = 'Grid Off';
            gridOn = true; 
        } 
    }

}
function gridReverse(){
    if(gridOn === true){
        gridOn = false;
    }else{
        gridOn = true;
    }
}

function reset() {
    newBoard(gridSize);
    shake();
    gridReverse()
    gridTog() 
    blackPick() 
}
function colorPick() {
    Array.from(boxes).forEach(v => v.addEventListener('mouseover', function() {
        v.style.background = hex;
      }));
    document.querySelector('#randcolor').style.backgroundColor = 'black'; 
    document.querySelector('#black').style.backgroundColor = 'black';
    document.querySelector('#eraser').style.backgroundColor = 'black';
    document.querySelector('#cp').style.opacity = 1;     
}
function randomPick() {
    Array.from(boxes).forEach(v => v.addEventListener('mouseover', function() {
        v.style.background = randColor();
      }));
    document.querySelector('#randcolor').style.backgroundColor = 'green'; 
    document.querySelector('#black').style.backgroundColor = 'black';
    document.querySelector('#eraser').style.backgroundColor = 'black';
    document.querySelector('#cp').style.opacity = .4;     
}

function blackPick() {
    Array.from(boxes).forEach(v => v.addEventListener('mouseover', function() {

        v.style.background = 'black';
        
      })); 
      document.querySelector('#randcolor').style.backgroundColor = 'black'; 
      document.querySelector('#eraser').style.backgroundColor = 'black'; 
      document.querySelector('#black').style.backgroundColor = 'green';
      document.querySelector('#cp').style.opacity = .4;       
}
function eraser() {
    Array.from(boxes).forEach(v => v.addEventListener('mouseover', function() {

        v.style.background = 'transparent';
        
      })); 
      document.querySelector('#randcolor').style.backgroundColor = 'black'; 
      document.querySelector('#cp').style.opacity = .4; 
      document.querySelector('#black').style.backgroundColor = 'black';   
      document.querySelector('#eraser').style.backgroundColor = 'green';    
}

