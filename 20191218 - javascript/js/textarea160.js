var txt = document.getElementById("txtText");
var counter = document.getElementById("lblCounter");
var pnl = document.getElementById("pnlOutput");
const maxLength = 160;

/*
function saveText(){
    pnl.innerHTML = pnl.innerHTML + "<p style='color:red;'>" + txt.value + "</p><hr>";
    txt.value = "";
}
*/

function saveText(){
    var text = document.createElement("p");
    text.innerHTML = txt.value;
    text.style.color = "red";
    var line = document.createElement("hr");

    txt.value = "";
    counter.innerHTML = maxLength;
    
    pnl.appendChild(text);
    pnl.appendChild(line);
}

function updateCounter(){
    var l = maxLength - txt.value.length;
    counter.innerHTML = l;
    if(l < 0)
        counter.style.color = "red";
    else
        counter.style.color = "#000";
}

function checkLength(){
    var l = txt.value.length;
    if(l > maxLength){
        txt.value = txt.value.substring(0, maxLength);
        updateCounter();
        return false;
    }
}