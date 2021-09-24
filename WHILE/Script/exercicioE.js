var resultado = 1;
var expoente = 0;
var texto = "";

while (expoente <= 15) {
    texto += "<br>O número 3 elevado à " + expoente + " = " + resultado;
    resultado = resultado * 3;
    expoente++;
}
document.getElementById("teste").innerHTML = texto;