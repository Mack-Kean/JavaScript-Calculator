//calculator div object
const calc = document.querySelector('.calculator');

//this is where numbers will be read from and written to
const textArea = calc.querySelector('textarea');

//All other button objects
const zero = calc.querySelector('#B0');
const one = calc.querySelector('#B1');
const two = calc.querySelector('#B2');
const three = calc.querySelector('#B3');
const four = calc.querySelector('#B4');
const five = calc.querySelector('#B5');
const six = calc.querySelector('#B6');
const seven = calc.querySelector('#B7');
const eight = calc.querySelector('#B8');
const nine = document.querySelector('#B9');

const add = calc.querySelector('#add');
const subtract = calc.querySelector('#sub');
const multiply = calc.querySelector('#mul');
const divide = calc.querySelector('#div');
const equals = calc.querySelector('#eql');

const clear = calc.querySelector('#clear');

//string for text field
var numString = '';

//object storing values and operation needed for calculation
var calcInfo = {num1: 0, num2: 0, operation: null, textClear: false};

//function to set text field 
function setText() {
    textArea.textContent = numString;
}

//function to clear text field
function clearText(){
    numString = ''
    setText();
}

//callable equals funtion
function equate(){
    if (calcInfo.operation == '+'){
        //case for addition
        calcInfo.num1 = calcInfo.num1 + calcInfo.num2
        numString = (calcInfo.num1).toString()
        setText();
    } else if (calcInfo.operation == '-'){
        //case for subtraction
        calcInfo.num1 = calcInfo.num1 - calcInfo.num2
        numString = (calcInfo.num1).toString()
        setText();
    } else if (calcInfo.operation == '*'){
        //case for multiplication
        calcInfo.num1 = calcInfo.num1 * calcInfo.num2
        numString = (calcInfo.num1).toString()
        setText();
    } else if (calcInfo.operation == '/'){
        //case for division
        calcInfo.num1 = calcInfo.num1 / calcInfo.num2
        numString = (calcInfo.num1).toString()
        setText();
    }
    calcInfo.num2 = 0;
    calcInfo.operation = null;
}

//number button click functions
zero.onclick = function() {
    if (calcInfo.textClear){
        clearText();
        calcInfo.textClear = false;
    }
    numString += '0';
    setText();
}

one.onclick = function() {
    if (calcInfo.textClear){
        clearText();
        calcInfo.textClear = false;
    }
    numString += '1';
    setText();
}

two.onclick = function() {
    if (calcInfo.textClear){
        clearText();
        calcInfo.textClear = false;
    }
    numString += '2';
    setText();
}

three.onclick = function() {
    if (calcInfo.textClear){
        clearText();
        calcInfo.textClear = false;
    }
    numString += '3';
    setText();
}

four.onclick = function() {
    if (calcInfo.textClear){
        clearText();
        calcInfo.textClear = false;
    }
    numString += '4';
    setText();
}

five.onclick = function() {
    if (calcInfo.textClear){
        clearText();
        calcInfo.textClear = false;
    }
    numString += '5';
    setText();
}

six.onclick = function() {
    if (calcInfo.textClear){
        clearText();
        calcInfo.textClear = false;
    }
    numString += '6';
    setText();
}

seven.onclick = function() {
    if (calcInfo.textClear){
        clearText();
        calcInfo.textClear = false;
    }
    numString += '7';
    setText();
}

eight.onclick = function() {
    if (calcInfo.textClear){
        clearText();
        calcInfo.textClear = false;
    }
    numString += '8';
    setText();
}

nine.onclick = function() {
    if (calcInfo.textClear){
        clearText();
        calcInfo.textClear = false;
    }
    numString += '9';
    setText();
}

//other button click functions
add.onclick = function() {
    if (calcInfo.operation === null){
        // case for first operation, num1 will be empty in this case
        calcInfo.num1 = parseInt(numString);
        calcInfo.operation = '+';
        clearText();
    } else {
        // case when previous operation has been done, populating num1
        calcInfo.num2 = parseInt(numString);
        equate();
        calcInfo.operation = '+';
        calcInfo.textClear = true;
    }
}

subtract.onclick = function() {
    if (calcInfo.operation === null){
        // case for first operation, num1 will be empty in this case
        calcInfo.num1 = parseInt(numString);
        calcInfo.operation = '-';
        clearText();
    } else {
        // case when previous operation has been done, populating num1
        calcInfo.num2 = parseInt(numString);
        equate();
        calcInfo.operation = '-';
        calcInfo.textClear = true;
    }
}

multiply.onclick = function() {
    if (calcInfo.operation === null){
        // case for first operation, num1 will be empty in this case
        calcInfo.num1 = parseInt(numString);
        calcInfo.operation = '*';
        clearText();
    } else {
        // case when previous operation has been done, populating num1
        calcInfo.num2 = parseInt(numString);
        equate();
        calcInfo.operation = '*';
        calcInfo.textClear = true;
    }
}

divide.onclick = function() {
    if (calcInfo.operation === null){
        // case for first operation, num1 will be empty in this case
        calcInfo.num1 = parseInt(numString);
        calcInfo.operation = '/';
        clearText();
    } else {
        // case when previous operation has been done, populating num1
        calcInfo.num2 = parseInt(numString);
        equate();
        calcInfo.operation = '/';
        calcInfo.textClear = true;
    }
}

equals.onclick = function() {
    // this will be the number ented after an operation button is pressed
    calcInfo.num2 = parseInt(numString);
    equate();
    calcInfo.textClear = true;
}

clear.onclick = function() {
    calcInfo.num1 = 0;
    calcInfo.num2 = 0;
    calcInfo.operation = null;
    clearText();
}