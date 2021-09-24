var X = 15;
var texto = "";
var resultado = 0;

do {
    resultado = Math.pow(X, 2);
    texto += "<br>" + X + " * " + X + " = " + resultado;
    X++;
} while (X < 201)

document.getElementById("teste").innerHTML = texto;
