/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */

const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => {
    return number1 * number2;
}

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */

const currentDate = new Date();
let currentYear = null;
currentYear = currentDate.getFullYear();

document.querySelector('#year').innerHTML = currentYear;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById('array').innerHTML = numbers;

/* Output Odds Only Array */

let odds = numbers.filter((num) => num % 2 === 1);
document.getElementById('odds').innerHTML = odds;



/* Output Evens Only Array */

let evens = numbers.filter((num) => num % 2 === 0);
document.getElementById('evens').innerHTML = evens;



/* Output Sum of Org. Array */

let sum = numbers.reduce((sum, number) => sum + number);
document.getElementById('sumOfArray').innerHTML = sum;


/* Output Multiplied by 2 Array */

let doubled = numbers.map(number => number * 2);
document.getElementById('multiplied').innerHTML = doubled;


/* Output Sum of Multiplied by 2 Array */

let doubledSum = numbers.map(number => number * 2).reduce((sum, number) => sum + number);
document.getElementById('sumOfMultiplied').innerHTML = doubledSum;
