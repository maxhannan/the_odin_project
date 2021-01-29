let buttons = document.querySelectorAll('button');
let display = document.querySelector('#display');

console.log(display)
buttons.forEach(button => button.addEventListener('click', clickyBoy));
function clickyBoy(e){
    
    if(e.target.className == 'operator'){
        console.log('Operator: ' + e.target.value); 
        display.innerHTML =  e.target.value
    }else if(e.target.className == 'number'){
        console.log('Number: ' + e.target.value);
        display.innerHTML +=  e.target.value
    }else{
        if(e.target.value === 'ac'){
            console.log(e.target.value);
            display.innerHTML = '';
        }else{
            display.innerHTML +=  e.target.value 
        }
       
    }
  
}
console.log(buttons);