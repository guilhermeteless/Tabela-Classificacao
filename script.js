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


var time = [loud, miners, paiN, flamengo, furia, liberty, intz, red, kabum, rensga];

function exibeTimeNaTela(time){
    var elemento = ""
    for (var i = 0; i < time.length; i++) {
          elemento += "<tr><td>" + time[i].posição + "</td>"
          elemento += "<td>"+ time[i].time + "</td>"
          elemento += "<td>"+ time[i].vitorias + "</td>"
          elemento += "<td>"+ time[i].derrotas + "</td>"
          elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
          elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
          elemento += "</tr>"
    }

    var tabelaTime = document.getElementById("tabelaTime");
    tabelaTime.innerHTML = elemento;
}

exibeTimeNaTela(time);


function adicionarVitoria(i) {
    var time = time[i]
    time.vitorias++
    exibeTimeNaTela(time)

}

function adicionarDerrota(i) {
    var time = time[i]
    time.derrotas++
    exibeTimeNaTela(time)

}
