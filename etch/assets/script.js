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
let gridSize = prompt('Grid Size:')
window.onload = grid(gridSize);
var color = [, "#3C9EE7", "#E7993C",  
"#E73C99", "#3CE746", "#E7993C"]; 



var grid = document.getElementsByClassName('box');

Array.from(grid).forEach(v => v.addEventListener('mouseover', function() {
  v.style.background = color[Math.floor(Math.random() * color.length)];
}));

