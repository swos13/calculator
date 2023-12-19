const display = document.querySelector('#display');
const numericButtons = document.querySelectorAll('.numeric');
const commaButton = document.querySelector('.comma');

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