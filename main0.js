var inv1 = {
  "nome":"Fabio",
  "tavolo": 45
}
var inv2 = {
  "nome":"Ervin",
  "tavolo": 34
}
var inv3 = {
  "nome":"Davide",
  "tavolo": 1
}
var inv4 = {
  "nome":"Loana",
  "tavolo": 4
}
var inv5 = {
  "nome":"Fede",
  "tavolo": 5
}
var invitati = [inv1,inv2,inv3,inv4,inv5]; //Arriva dal DB

var lista = document.getElementById("lista-invitati");
for (var i = 0; i < invitati.length; i++) {
  lista.innerHTML +="<li class='invitato'>"+invitati[i].nome + " - tavolo: "+ invitati[i].tavolo+"</li>"
}

var cerca = document.getElementById('cerca');
cerca.addEventListener('click',findInvitato);

function findInvitato(){
  var ricercato = document.getElementById('input').value;
  // console.log(ricercato.value);
  var lis = document.getElementById('lista-invitati').childNodes;
  for (var i = 0; i < lis.length; i++) {
    lis[i].className = "";
    var ris = lis[i].innerHTML.toLowerCase().search(ricercato.toLowerCase());
    if (ris >= 0){
      lis[i].className = "admitted"
    }
  }
}
