function calling(){
    var name = document.getElementsByClassName("name");
    var number = document.getElementsByClassName("number");
   
    name[0].innerHTML = "댕댕이";
    number[0].innerHTML = "010-XXXX-XXXX";
}

function onClick(){
    var set;
    set = setTimeout(calling, 2000);
}

document.getElementById("call").addEventListener("click", onClick)