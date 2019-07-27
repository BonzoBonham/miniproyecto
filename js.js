var inter,t;
function interval(){
    document.getElementById("testdiv1").innerHTML="00"
    t=59;
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
        document.getElementById("testdiv1").innerHTML="01"
        document.getElementById("testdiv").innerHTML="00";
    },2000,"JavaScript");
}
function clear(){
    clearInterval(inter);
}

