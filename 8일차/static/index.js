var h1 = document.getElementsByTagName('h1');
var setStr = "안녕하세요!"
var printStr = ""
var i=0;

function randomC(){
    colorRandom = "#" + Math.round(Math.random() * 0xFFFFFF).toString(16);
    h1[0].style.color = colorRandom;
}
function addStr(){
    if(i==6){
        i=0;
        printStr = ""
    }
    else{
        randomC();
        printStr += setStr[i++];
        h1[0].innerHTML = printStr;
    }
}