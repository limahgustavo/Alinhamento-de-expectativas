function leiamais() {
  var pontos = document.getElementById("pontos");
  var maistexto = document.getElementById("mais");
  var btnleiamais = document.getElementById("btn-02");

  if (pontos.style.display === "none") {
    pontos.style.display = "inline";
    maistexto.style.display = "none";
    btnleiamais.innerHTML = "Leia Mais";
  } else {
    pontos.style.display = "none";
    maistexto.style.display = "inline";
    btnleiamais.innerHTML = "Leia Menos";
  }
}

function criarTopico() {
  var topico = document.getElementById("criar-topico");
  var feedback = document.getElementById("feedback");

  if (topico.style.display === "none") {
    topico.style.display = "inline";
  } else {
    feedback.style.display = "inline";
    topico.style.display = "none";
  }
}
