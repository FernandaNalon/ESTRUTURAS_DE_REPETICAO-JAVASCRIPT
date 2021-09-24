var cont = 1;
var impares = 1;
var texto = "";
var texto2 = "";

for (cont; cont <= 10; cont++) {
    if (cont % 2 == 1) {
        impares = cont;
        texto += impares + "... ";
    }
    var fatorial = 1;
    var cont2 = impares;
    for (cont2; cont2 >= 1; cont2--) {
        fatorial = fatorial * cont2;
    }
    if (cont % 2 == 1) {
        texto2 += "O fatorial do número " + impares + " é igual a: " + fatorial + ". <br>";
    }
}

document.getElementById("teste").innerHTML = texto;
document.getElementById("teste1").innerHTML = texto2;