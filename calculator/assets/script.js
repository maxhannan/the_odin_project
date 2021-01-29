const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

function updateDisplay(){
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}
updateDisplay();

const btns = document.querySelector('.keys');
console.log(btns)
btns.addEventListener('click', (e)=>{
    const {target} = e;

    if(!target.matches('button')){
        return;
    }
    if(target.classList.contains('operator')){
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    if(target.classList.contains('decimal')){
        inputDecimal(target.value);
		updateDisplay();
        return;
    }
    if(target.classList.contains('all-clear')){
        resetCalculator();
        updateDisplay();
        return;
    }
    if(target.classList.contains('posNeg')){
        posNeg()
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();

})
function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }

  console.log(calculator);
}

function posNeg(){
    calculator.displayValue = String(parseFloat(calculator.displayValue) * -1) ;  
}  

function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = '0.'
      calculator.waitingForSecondOperand = false;
      return
    }
  
    if (!calculator.displayValue.includes(dot)) {
        if(dot === '.'){
            calculator.displayValue += dot;  
        }else{
            calculator.displayValue = String(parseFloat(calculator.displayValue) * -1);
        }
    }else if((parseFloat(calculator.displayValue)< 0)){
            calculator.displayValue = String(parseFloat(calculator.displayValue) * -1) ;  
        }
    }
  

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator
  const inputValue = parseFloat(displayValue);

  if (firstOperand == null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;

  } else if(operator == '!'){
    const result = factorial(firstOperand);
    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
    
  }else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    
    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
   
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}

function calculate(firstOperand, secondOperand, operator) {
  if (operator === '+') {
    return firstOperand + secondOperand;
  } else if (operator === '-') {
    return firstOperand - secondOperand;
  } else if (operator === '*') {
    return firstOperand * secondOperand;
  } else if (operator === '/') {
      if(secondOperand != 0){
        return firstOperand / secondOperand;
      }else{
          return 'You know better.';
      }
  } else if (operator = '**'){
      return firstOperand**secondOperand;
  } else if (operator = '!'){
      return factorial(firstOperand);

  }
  return secondOperand;
  }




function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}
function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
  }

function factorial(num1) {
	let op = 1;
	if(num1 == 0){
		return 1;
	}
	for(i = 1; i <= num1; i++){
		op *= i;
	}

	return op;
}
function del(str){
    str = str.substring(0, str.length - 1);
    console.log(str)
    return str;
}