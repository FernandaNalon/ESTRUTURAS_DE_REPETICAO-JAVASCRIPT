var numero = 1;
var texto = "";
var somatorio = 0;

do {
    if (numero % 2 == 0) {
        pares = numero;
        texto += pares + "... ";
        somatorio += pares;
    }
    numero++;
} while (numero < 501)

document.getElementById("teste").innerHTML = texto;
document.getElementById("teste2").innerHTML = somatorio;