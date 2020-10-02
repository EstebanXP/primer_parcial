function cambiarMesa(idmesaaux,idaux){
    mesa1=document.getElementById(idmesaaux);
    if(mesa1.src.match('mNoUso')){
        mesa1.src="mUso.jpg";
    }else{
        mesa1.src="mNoUso.jpg";
    }
    iniciarTiempo();
}
function iniciarTiempo(){
    
}







