const display = document.querySelector('#current');
const memory = document.querySelector('#memory');
const numericButtons = document.querySelectorAll('.numeric');
const commaButton = document.querySelector('.comma');
const operationButtons = document.querySelectorAll('.operation');
const equalButton = document.querySelector('#equal');

display.value = '0';
let numberOne = null;
let numberTwo = null;
let operation = '';

function putOnDisplay(numeric){
    if(display.value == '0' && numeric != '.')
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
        numberOne = parseFloat(display.value);
        operation = operationButton.value;
        memory.textContent = `${numberOne} ${operation}`
        current.value = '';
    })
})

equalButton.addEventListener('click', () => {
    if(display.value != '' || operation == ''){
        numberTwo = parseFloat(display.value);
        current.value = operate(operation, numberOne, numberTwo);
    }
})