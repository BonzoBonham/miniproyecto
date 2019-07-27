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
        document.getElementById("testdiv").innerHTML="Pasaron 2 segundos antes de que vieras esto.";
    },2000,"JavaScript");
}
function clear(){
    clearInterval(inter);
}

var timout;
function apagar(){
    document.getElementById("testdiv").innerHTML="En 10 segundos se apagará el computador.";
    timout=setTimeout(function(){
        document.getElementById("testdiv").innerHTML="Computador apagado.";
    },10000,"JavaScript");
}
function cancelar(){
    clearTimeout(timout);
    document.getElementById("testdiv").innerHTML="Operación cancelada.";
}