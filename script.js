// criando um objeto
var loud = {posição: "1º", time:  "LOUD Academy", vitorias: 13, derrotas: 3};
var miners = {posição: "2º", time: "Miners Academy", vitorias: 12, derrotas: 4};
var paiN = {posição: "3º", time: "paiN Academy", vitorias: 10, derrotas: 6};
var flamengo = {posição: "4º", time: "Flamengo Academy", vitorias: 9, derrotas: 7};
var furia = {posição: "5º", time: "Furia Academy", vitorias: 9, derrotas: 7};
var liberty = {posição: "6º", time: "Liberty Academy", vitorias: 9, derrotas: 7};
var intz = {posição: "7º", time: "INTZ Academy", vitorias: 9, derrotas: 7};
var red = {posição: "8º", time: "RED Academy", vitorias: 9, derrotas: 7};
var kabum = {posição: "9º", time: "KaBuM! Academy", vitorias: 9, derrotas: 7};
var rensga = {posição: "10º", time: "Rensga Academy", vitorias: 9, derrotas: 7};


// vamos criar uma LISTA com os times.
var times = [loud, miners, paiN, flamengo, furia, liberty, intz, red, kabum, rensga];

//
function exibeTimesNaTela(times) {
  var elemento = "";
  for (var i = 0; i < times.length; i++) {
    //o += significa a mesma coisa que elemento = elemento + "<tr><td>times.nome</td>"
    elemento += "<tr><td>" + times[i].posição + "</td>";
    elemento += "<td>" + times[i].time + "</td>";
    elemento += "<td>" + times[i].vitorias + "</td>";
    elemento += "<td>" + times[i].derrotas + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento +=
      "<td><button onClick='zerarPlacar(" + i + ")'>Zerar</button></td>";
    elemento += "</tr>";
  }

  var tabelaTimes = document.getElementById("tabelaTimes");
  tabelaTimes.innerHTML = elemento;
}

exibeTimesNaTela(times);

// botão vitoria
function adicionarVitoria(i) {
  var time = times[i];
  time.vitorias++;
  exibeTimesNaTela(times);
}

// botão derrota
function adicionarDerrota(i) {
    var time = times[i];
    time.derrotas++;
    exibeTimesNaTela(times);
}
// botão zerar
function zerarPlacar(i) {
  var time = times[i];
  time.vitorias = 0;
  time.derrotas = 0;
  exibeTimesNaTela(times);
}
