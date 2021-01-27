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
let gridSize = prompt('Grid Size:');
window.open = grid(gridSize);
var color = [, "#3C9EE7", "#E7993C",  
"#E73C99", "#3CE746", "#E7993C"]; 

var main = document.getElementById('main');
let boxes = document.getElementsByClassName('box');

function newBoard(width){
    main.innerHTML = ''
    grid(width);
    let boxes = document.getElementsByClassName('box');
    Array.from(boxes).forEach(v => v.addEventListener('mouseover', function() {
        v.style.background = color[Math.floor(Math.random() * color.length)];
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
document.getElementsByClassName('gridSize')[0].onclick = function() {
    gridSize = prompt('Grid Size:');
    newBoard(gridSize)
    shake();
  }
  
document.getElementsByClassName('reset')[0].onclick = function() {
    newBoard(gridSize);
    shake();
    
    
}
  





Array.from(boxes).forEach(v => v.addEventListener('mouseover', function() {
  v.style.background = color[Math.floor(Math.random() * color.length)];
}));

