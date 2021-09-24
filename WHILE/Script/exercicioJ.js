var num = 0;
var cont = 50;
var somatorio = 0;
var media = 0;
var texto = "";
var texto2 = "";
var pares = "";

while (cont <= 70) {
    if (cont % 2 == 0) {
        somatorio += cont;
        media = somatorio / 11;
        pares += cont + "... ";
        texto = "O somatório de todos os números pares será: " + somatorio;
        texto2 = "A média aritmética dos números dados é: " + media;

    }
    cont++;
}
document.getElementById("pares").innerHTML = pares;
document.getElementById("teste").innerHTML = texto;
document.getElementById("teste2").innerHTML = texto2;