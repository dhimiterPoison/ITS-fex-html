var a = 1;
var s1 = "Ciao sono 'Andrea'. ";
var s2 = 'Ciao sono \'Andrea\' ("ABC"). ';

console.log(s1 + s2);

var b = 2;
b = "ciao";

var c;
console.log(c); // undefined
c = null;
console.log(c);

// numeri
var xxFloat = 12.34;
var xxInt = 1234;

console.log(parseFloat("11.22"));
console.log(parseInt("11.22"));




if (true) {
    var yy = 42;
}
console.log(yy);

// Array

var list1 = ["item1", "item2", "item3"];

var list2 = new Array();
list2[0] = "item1";
list2[1] = "item2";
list2[2] = "item3";
list2[10] = "item4";

var list3 = [12, "ciao", false];


// if

var z1 = 10;
var z2 = "10";

if(z1 === z2){
    console.log("Sono uguali!");
} else {
    console.log("Sono diversi!");
}

if(z1 === z2)
    console.log("Sono uguali!");
else
    console.log("Sono diversi!");
/*
alert("ciao");

if(confirm("Sei sicuro?")){
    console.log("OK");
} else {
    console.log("ERROR");
}

var zzz = prompt("Come ti chiami?")
*/


// Funzioni

function consolePrint(message){
    var text = "MESSAGGIO: " + message;
    console.log(text);
    return text.length;
}


var l = consolePrint("ciao!!");
console.log("il testo è lungo " + l + " caratteri");


function add(num1, num2){
    return num1 + num2;
}

var result = add(12,34);
console.log("la somma è " + result);



//

var value = "somma";

switch(value){
    case "somma":
        console.log("SOMMA");
        break;
    case "divisione":
        console.log("DIVISIONE");
        break;
    default:
        console.log("NESSUNA");
}

var inputTxt = document.getElementById("txt");
var divPnl = document.getElementById("pnl");

function txtWrite(text){
    inputTxt.value = inputTxt.value + text;
    divPnl.innerHTML =  divPnl.innerHTML+ text;
}
