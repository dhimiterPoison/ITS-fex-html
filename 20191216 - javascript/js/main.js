var txt = document.getElementById("txtInput");
var btn = document.querySelector("#btnGo");
var pnls = document.querySelectorAll(".pnlOutput");

btn.addEventListener("click", function(event){
    var text = txt.value;

    for (let i = 0; i < pnls.length; i++) {
        const obj = pnls[i];
        obj.innerHTML = text;
    }
});

/* CASE 1
function btnClick(){
    alert('click');
}
btn.addEventListener("click", btnClick);
*/

/* CASE 2
var btnClick = function(){
    alert('click');
}
btn.addEventListener("click", btnClick);
*/


/* ******************************* */
var nums = document.querySelectorAll(".btnNum");

for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    
    item.addEventListener("click", function(e){
        //var currentBtn = e.target;
        var currentBtn = this;
        alert(currentBtn.innerHTML);
    });
}


//var s1 = "asdasdasdasdas".substring(0,160);