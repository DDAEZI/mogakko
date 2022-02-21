

function check_text() {
    var value = document.getElementById("console").value;
    var t = document.getElementsByClassName("textBox");
    if(value=="alert"){
        alert("경고!");
    }
    else if(value=="안녕"){
        t[0].innerHTML = ">ㅅ< !"
    }
    else if(value=="몇 살이야?"){
        t[0].innerHTML = "나는 2살이야 !"
    }
    else if(value=="취미가 뭐야?"){
        t[0].innerHTML = "나는 낮잠자는걸 제일 좋아해 !"
    }
    else{
        console.log(value);
    }
}

document.getElementById("inputBtn").addEventListener("click", check_text);
