function cambiarMesa(idmesaaux,idt1,idt2){
    mesa1=document.getElementById(idmesaaux);
    if(mesa1.src.match('mNoUso')){
        mesa1.src="mUso.jpg";
        iniciarTiempo(idt1);
        moverReloj(idt2)
        
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

function moverReloj(idt2){
    momento1=new Date()
    hora=momento1.getHours()
    minuto=momento1.getMinutes()
    sgs=momento1.getSeconds()
    imHora=hora+" : "+minuto+" : "+sgs
    document.getElementById(idt2).innerHTML=imHora
    setTimeout("moverReloj(idt2)",100)
    moverReloj(idt2)
}



function borrarReloj(id){
    momento1=new Date()
    hora=00;
    minuto=00;
    sgs=00;
    imHora=hora+" : "+minuto+" : "+sgs
    document.getElementById(id).innerHTML=imHora
}

