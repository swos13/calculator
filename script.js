const display = document.querySelector('#current');
const memory = document.querySelector('#memory');
const numericButtons = document.querySelectorAll('.numeric');
const commaButton = document.querySelector('.comma');
const operationButtons = document.querySelectorAll('.operation');
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');
const allClearButton = document.querySelector('#all-clear');

display.value = '0';
let numberOne = null;
let numberTwo = null;
let result = null;
let operation = '';


function isError(){
    return display.value == 'ERROR' ? true : false;
}

function putOnDisplay(numeric){
    if(parseFloat(display.value) == result){
        memory.value = '';
        display.value = '';  
    }
    if((display.value == '0' && numeric != '.') || isError())
        display.value = '';  
    display.value += numeric;
}

function add(addendOne, addendTwo){
    return addendOne + addendTwo;
}

function substract(minuend, subtrahend){
    return minuend - subtrahend;
}

function multiply(multiplicand, multiplier){
    return multiplicand * multiplier;
}

function divide(dividend, divisor){
    if(divisor == 0) return 'ERROR';
    return dividend/divisor;
}

function operate(operator, numberOne, numberTwo){
    let result;
    switch (operator){
        case '+':
            result = add(numberOne, numberTwo);
            break;
        case '-':
            result = substract(numberOne, numberTwo);
            break;
        case 'x':
            result = multiply(numberOne, numberTwo);
            break;
        case '/':
            result = divide(numberOne, numberTwo);
            break;
    }
    return result;
}

function isNumberOneEmpty(){
    return numberOne == '' ? true : false;
}

numericButtons.forEach((button) => {
        button.addEventListener('click', () => {
            putOnDisplay(button.value);
        });
})

commaButton.addEventListener('click', () =>{
    if(!display.value.includes(".")){
        putOnDisplay(commaButton.value);
    }
})

operationButtons.forEach((operationButton) => {
    operationButton.addEventListener('click', () => {
        if(isError()){
            display.value = '0';
            numberOne = null;
            operation = '';
            memory.value = '';
        }
        else if(operation == ''){
            numberOne = parseFloat(display.value);
            operation = operationButton.value;
            memory.value = `${numberOne} ${operation}`;
            display.value = '0';
        }
        else{
            numberTwo = parseFloat(display.value);
            let temp = operate(operation, numberOne, numberTwo);
            if(temp != 'ERROR'){
                numberOne = parseFloat(temp);
                operation = operationButton.value;
                memory.value = `${numberOne} ${operation} `;
                display.value = '0';
            }
            else {
                memory.value = `${numberOne} ${operation} 0`;
                display.value = temp;
                operation = '';
            }
            numberTwo = null;
        }
        
    })
})

equalButton.addEventListener('click', () => {
    if(operation != ''){
        numberTwo = parseFloat(display.value);
        display.value = operate(operation, numberOne, numberTwo);
        memory.value += ` ${numberTwo} = `;
        operation = '';
        if(display.value != 'ERROR')
            result = parseFloat(display.value);
    }
})

clearButton.addEventListener('click', () => {
    display.value = '0';
})

allClearButton.addEventListener('click', () => {
    display.value = '0';
    memory.value = '';
    numberOne = null;
    numberTwo = null;
    operation = '';
})