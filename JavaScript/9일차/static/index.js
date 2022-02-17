var title = document.getElementsByClassName("title");
var genre = document.getElementsByClassName("genre");
var release = document.getElementsByClassName("release");
var desc = document.getElementsByClassName("desc");
var url = document.getElementsByClassName("url");
var img = document.getElementsByClassName("img");


function movieInfo(title, genre, release, desc, url){
    this.title = title;
    this.genre = genre;
    this.release = release;
    this.desc = desc;
    this.url = url;
}
function image(){
    document.getElementsByClassName("img").src = "./static"

}
function movieOne(){
    var movie1 = new movieInfo("스파이더맨 홈커밍","액션, 모험, SF", "2017.07.05","마블 히어로의 세대교체! 어벤져스가 되려면 시험 같은 거 봐요? 시빌 워 당시 토니 스타크(로버트 다우니 주니어)에게 발탁되어 대단한 활약을 펼쳤던 스파이더맨 피터 파커(톰 홀랜드). 그에게 새로운 수트를 선물한 토니 스타크는 위험한 일은 하지 말라며 조언한다. 하지만 허세와 정의감으로 똘똘 뭉친 피터 파커는 세상을 위협하는 강력한 적 벌처(마이클 키튼)에 맞서려 하는데… 아직은 어벤져스가 될 수 없는 스파이더맨 숙제보다 세상을 구하고 싶은 스파이더맨 그는 과연 진정한 히어로로 거듭날 수 있을 것인가!"
    , "출처 : https://movie.naver.com/movie/bi/mi/basic.naver?code=135874")
    title[0].innerHTML = movie1.title;
    genre[0].innerHTML = movie1.genre;
    release[0].innerHTML = movie1.release;
    desc[0].innerHTML = movie1.desc;
    url[0].innerHTML = movie1.url;
}

function movieTwo(){
    var movie2 = new movieInfo("너의 이름은","애니메이션, 드라마, 멜로/로맨스", "2017.01.14","아직 만난 적 없는 너를, 찾고 있어. 천년 만에 다가오는 혜성 기적이 시작된다. 도쿄에 사는 소년 ‘타키’와 시골에 사는 소녀 ‘미츠하’ 서로의 몸이 뒤바뀌는 신기한 꿈을 꾼다. 낯선 가족, 낯선 친구들, 낯선 풍경들... 반복되는 꿈과 흘러가는 시간 속, 마침내 깨닫는다. 우리, 서로 뒤바뀐 거야? 절대 만날 리 없는 두 사람이 반드시 만나야 하는 운명이 되다. 서로에게 남긴 메모를 확인하며 점점 친구가 되어가는 ‘타키’와 ‘미츠하’. 언제부턴가 더 이상 몸이 바뀌지 않자 자신들이 특별하게 이어져있었음을 깨달은 ‘타키’는 ‘미츠하’를 만나러 가는데... 잊고 싶지 않은 사람. 잊으면 안 되는 사람. 너의 이름은?"
    ,"출처 : https://movie.naver.com/movie/bi/mi/basic.naver?code=150198")

    title[0].innerHTML = movie2.title;
    genre[0].innerHTML = movie2.genre;
    release[0].innerHTML = movie2.release;
    desc[0].innerHTML = movie2.desc;
    url[0].innerHTML = movie2.url;
}

function movieThr(){
    var movie3 = new movieInfo("리즈와 파랑새", "애니메이션", "2018.10.09","“너에겐 날개가 있고, 끝없이 펼쳐진 하늘도 있어” 늘 혼자였던 ‘리즈’ 앞에 어떤 소녀가 나타났어. 두 사람은 둘도 없는 친구가 되지만, 결국 헤어졌지. 왜냐면 그 소녀는 사실 ‘파랑새’였거든. “이 동화, 꼭 우리 얘기 같지 않니?” 외톨이 ‘미조레’에게 다가와 친구가 되어준 ‘노조미’, 평생 단짝일 줄 알았던 둘은 어느새 고3 마지막 콩쿠르 합주곡 [리즈와 파랑새]를 준비한다. 머지않은 졸업이 두렵기만 한 미조레에게 노조미는 ‘동화는 언제나 해피엔딩!’이라며 더 활짝 웃어 보이는데… 이들의 마지막 연주는 아름답게 울려 퍼질 수 있을까?"
    ,"https://movie.naver.com/movie/bi/mi/basic.naver?code=172040")

    title[0].innerHTML = movie3.title;
    genre[0].innerHTML = movie3.genre;
    release[0].innerHTML = movie3.release;
    desc[0].innerHTML = movie3.desc;
    url[0].innerHTML = movie3.url;
}