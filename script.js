function cambiarMesa(){
    mesa1=document.getElementById('mtable');
    if(mesa1.src.match('mNoUso')){
        mesa1.src="mUso.jpg";
    }else{
        mesa1.src="mNoUso.jpg";
    }
}