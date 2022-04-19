function leiamais(){
    var pontos=document.getElementById("pontos");
    var maistexto=document.getElementById("mais");
    var btnleiamais=document.getElementById("btn-02");

    if(pontos.style.display === "none"){
    pontos.style.display="inline";
    maistexto.style.display="none";
    btnleiamais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maistexto.style.display="inline";
        btnleiamais.innerHTML="Leia Menos";
    }
}

