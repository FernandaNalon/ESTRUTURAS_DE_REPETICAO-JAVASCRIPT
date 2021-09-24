var cont = 1;
var texto = "";
var texto2 = "";
var somatorio = 0;
var quadro = 1;

do {
    texto += "<br> No quadro " + cont + " teremos " + quadro + " grãos.";
    somatorio += quadro;
    quadro += quadro;
    document.getElementById("teste").innerHTML = texto;
    cont++;
} while (cont <= 64)
texto2 += "<br> O resultado da soma de todos os quadros é: " + somatorio + ".";
document.getElementById('teste2').innerHTML = texto2;