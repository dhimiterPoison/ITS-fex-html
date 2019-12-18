
var numericButtons = document.querySelectorAll(".btn-num");
var opButtons = document.querySelectorAll(".btn-op");
var btnClear = document.getElementById("btnClear");
var btnExecute = document.getElementById("btnExecute");
var display = document.getElementById("txtDisplay");

var prevNum;
var currentOp;

for (let i = 0; i < numericButtons.length; i++) {
    const btn = numericButtons[i];
    btn.addEventListener("click", function(){
        display.value = display.value + this.innerHTML;
    });
}

for (let i = 0; i < opButtons.length; i++) {
    const btnOp = opButtons[i];
    btnOp.addEventListener("click", function(){
        currentOp = this.innerHTML;
        prevNum = parseInt(display.value);
        display.value = "";
    });
}

btnClear.addEventListener("click", function(){
    prevNum = null;
    currentOp = null;
    display.value = ""; 
});

btnExecute.addEventListener("click", function(){
    var number = parseInt(display.value);
    var result;
    switch (currentOp) {
        case "+":
            result = prevNum + number;
            break;
        case "-":
            result = prevNum - number;
            break;
        case "*":
            result = prevNum * number;
            break;
        case "/":
            result = prevNum / number;
            break;
    }
    display.value = result;
});

