function cambiarMesa(idmesaaux,idt1,idt2){
    var inter1;
    mesa1=document.getElementById(idmesaaux);
    if(mesa1.src.match('mNoUso')){
        mesa1.src="mUso.jpg";
        iniciarTiempo(idt1);
        inter1=moverReloj(idt2,mesa1);
    }else{
        mesa1.src="mNoUso.jpg";
        mesa1.pausar(inter1);
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

function moverReloj(idt2,mesa){
    
      var n=0;
      var l=document.getElementById(idt2);
      var intervalo=setInterval(function(){
          l.innerHTML = n;
          n++;
      },999);
      
      if(mesa.src.match('mUso')){
          alert("Hola mundo");
      }
}

function pausar(inter){
    clearInterval(inter);
}
