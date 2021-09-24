var num = 1;
var cont = 1;
var somatorio = 0;
var media = 0;
var texto = "";
var texto2 = "";

while (cont <= 10) {
    num = +(prompt("Digite um valor: "));
    somatorio += num;
    media = somatorio / 10;
    texto = "O somatório de todos os números será: " + somatorio;
    texto2 = "A média aritmética dos números dados é: " + media;
    cont++;
}
document.getElementById("teste").innerHTML = texto;
document.getElementById("teste2").innerHTML = texto2;