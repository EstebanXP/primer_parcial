function cambiarMesa(idmesaaux,idt1,idt2,idt3){
    var t1=0;
    mesa1=document.getElementById(idmesaaux);
    if(mesa1.src.match('mNoUso')){
        mesa1.src="mUso.jpg";
        iniciarTiempo(idt1);
        moverReloj(idt2,mesa1,idt3);
        
    }else{
        mesa1.src="mNoUso.jpg";
    }
}

function iniciarTiempo(idt1){
    momento1=new Date();
    hora=momento1.getHours()
    minuto=momento1.getMinutes()
    sgs=momento1.getSeconds()
    imHora=hora+" : "+minuto+" : "+sgs;
    document.getElementById(idt1).innerHTML=imHora;
}

function moverReloj(idt2,mesa,idt3){
      var n=1;
      var l=document.getElementById(idt2);
      var intervalo=setInterval(function(){
          l.innerHTML = n;
          n++;
          if(mesa.src.match('mNoUso')){
            contarDinero(n,idt3);
            clearInterval(intervalo);
        }
      },999);
      
      
}

function contarDinero(tiempo1,idt3){
    document.getElementById(idt3).innerHTML=(tiempo1*0.0139)-0.0139;
}

