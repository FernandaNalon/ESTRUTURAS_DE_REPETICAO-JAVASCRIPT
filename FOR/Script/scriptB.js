var texto = "";
var num = +(prompt("Escolha um número: "));
var tabuada = 0;

for (let cont = 1; cont <= 10; cont++) {
    tabuada = cont * num;
    texto += "<br>" + cont + " X " + num + " = " + tabuada;
}
document.getElementById("teste").innerHTML = texto;