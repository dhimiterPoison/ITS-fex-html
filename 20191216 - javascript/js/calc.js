var display = document.getElementById("txtDisplay");

var prevNumber;
var currentOp;

function clearCalc(){
    display.value = "";
    prevNumber = null;
    currentOp = null;
}

function pressNum(number){
    display.value = display.value + number;
}

function pressOp(op){
    prevNumber = parseInt(display.value);
    display.value = "";
    currentOp = op;
}

function calculate(){
    var number = parseInt(display.value);
    var result;

    switch (currentOp) {
        case "+":
            result = prevNumber + number;
            break;
        case "-":
            result = prevNumber - number;
            break;
        case "*":
            result = prevNumber * number;
            break;
        case "/":
            result = prevNumber / number;
            break;
    }
    display.value = result;
}