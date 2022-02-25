var json = [
    {
        "question":"안녕",
        "answer":">ㅅ< !"
    },
    {
        "question":"몇 살이야?",
        "answer":"나는 2살이야!"
    },
    {
        "question":"취미가 뭐야?",
        "answer":"나는 낮잠자는걸 제일 좋아해!"
    }
]

var app = document.getElementById("app");
app.style.color = "rgb(255,105,180)";
var typewriter = new Typewriter(app, {
    loop: true
});
typewriter
    .typeString("안녕! 나는 인절미라구 해! 만나서 반가웡")  
    .pauseFor(1000)
    .deleteAll()
    .typeString("절미랑 놀아주라!")
    .pauseFor(1900)
    .start();


var question = "";
var answer = "";
var key=0;

function check_text() {
   

    var value = document.getElementById("console").value;
    var t = document.getElementsByClassName("textBox");
    var c = 0;

    if(key == 1){ //key 값이 1인 경우, 사용자의 선택 유도
	    if(value == "응"){
			t[0].innerHTML = "어떤 말을 알려줄거야?";
			key = 2; 
		}
		else if(value=="아니"){
			t[0].innerHTML = "힝궁";
			key = 0;
		}
		return;
	}
    
    if(key == 2){
		answer = value; 
		json.push({"question":question,"answer":answer});
        t[0].innerHTML = "말을 배웠어!";
        key=0;
        return;
	}

    for(let i = 0; i < json.length; i++){
        if(value == json[i].question){
          t[0].innerHTML = json[i].answer;
          return;
        }
      }
    
    t[0].innerHTML = "말을 가르쳐줄거야???(응 or 아니)";
	question = value;
	key = 1;
    
    if(value=="다크모드"){
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
    else if(value=="따라하기 모드" && c==0){
          t[0].style.color = "black";
          t[0].innerHTML = "따라하기 모드 시작!";
          c=1;
      }
    else if(c==1){
        if(value=="따라하기 모드 끝"){
            c=0;
            t[0].innerHTML = "따라하기 끄읕";
        }
        else{
            t[0].innerHTML = value + "~!";
        }
    }

}

document.getElementById("inputBtn").addEventListener("click", check_text);
