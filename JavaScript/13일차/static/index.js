function check_text() {
    var value = document.getElementById("console").value;
    var t = document.getElementsByClassName("textBox");
    var c = 1;

    if(value=="alert"){
        alert("경고!");
    }
    else if(value=="안녕"){
        t[0].innerHTML = ">ㅅ< !";
    }
    else if(value=="몇 살이야?"){
        t[0].innerHTML = "나는 2살이야 !";
    }
    else if(value=="취미가 뭐야?"){
        t[0].innerHTML = "나는 낮잠자는걸 제일 좋아해 !";
    }
    else if(value=="다크모드"){
        if(document.body.style.backgroundColor=="rgb(70, 68, 68)"){
            t[0].style.color = "rgb(255, 105, 180)";
            t[0].innerHTML = "이미 다크모드에용";
        }
        else{
            t[0].innerHTML = "다크모드 ON";
            document.body.style.backgroundColor = "rgb(70, 68, 68)";
        }
    }
    else if(value=="라이트모드"){
        if(document.body.style.backgroundColor!="white"){
            t[0].style.color = "black";
            t[0].innerHTML = "라이트모드 ON";
            document.body.style.backgroundColor = "white";
        }
        else{
            t[0].style.color = "rgb(255, 105, 180)";
            t[0].innerHTML = "이미 라이트모드에용";  
        }
      }
    else if(value=="따라하기 모드"){
          t[0].style.color = "black";
          c = 1;
          t[0].innerHTML = "따라하기 모드 시작!";
      }
    else if(value=="따라하기 모드 끝"){
          c = 2;
          t[0].innerHTML = "따라하기 모드 끝!";
      }
    else if(c!=2){
          value = value + "!";
          t[0].innerHTML = value;
      }

}


document.getElementById("inputBtn").addEventListener("click", check_text);
