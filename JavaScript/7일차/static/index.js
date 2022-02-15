var h=0,m=0,s=0,flag=0;
var time="";
var h1=document.getElementsByTagName('h1');
var set;

function start(){
    timer();
    timestop();
    set=setTimeout(start, 1000);
}
function reset(){
	clearTimeout(set);
	time="00:00:00";
	h=0;
	m=0;
	s=0;
	h1[0].innerHTML=time;
}
function stop(){
    flag=1;
    timestop();
}
function timestop(){
    if(flag==1)
        clearTimeout(set);
}
function timer(){
    time="";
    s++;
    if(s>=60){
        s-=60;
        m+=1;
    }
    if(m>=60){
        m-=60;
        h+=1;
    }
    if(m==99 && h==59 && s==59){
        stop();
    }
    if(h<=9) time=time+'0';
	time=time+h;
	time=time+':';
	if(m<=9) time=time+'0';
	time=time+m;
	time=time+':';
    if(s<=9) time=time+'0';
	time=time+s;

	h1[0].innerHTML=time;	
}
