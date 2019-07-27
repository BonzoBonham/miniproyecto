var inter,t;
function interval(){
    t=60;
    inter=setInterval(function(){
        document.getElementById("testdiv").innerHTML=t--;
		if(t == -1){
			clear();
		}	
    },1000,"JavaScript");
}
function timeout(){
    clear();
    setTimeout(function(){
        document.getElementById("testdiv").innerHTML="";
    },2000,"JavaScript");
}
function clear(){
    clearInterval(inter);
}

