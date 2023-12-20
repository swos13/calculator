const display = document.querySelector('#current');
const numericButtons = document.querySelectorAll('.numeric');
const commaButton = document.querySelector('.comma');
const operationButtons = document.querySelectorAll('.operation');
const memory = document.querySelector('#memory');

let numberOne = null;
let numberTwo = null;
let operation = '';

function putOnDisplay(numeric){
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
        if(display.value != ''){
            numberOne = parseInt(display.value);
            operator = operationButton.value;
            putOnDisplay(operationButton.value);
            memory.textContent = `${numberOne} ${operator}`
            current.value = '';
            console.log(`display - ${typeof display.value} numOne - ${typeof numberOne}`);
        }
    })
})