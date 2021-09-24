var somatorio = 0;
var cont2 = 0;
var media = 1;
var texto = "";
var texto1 = "";
var texto2 = "";
var texto3 = "";

do {
    var num = +(prompt("Digite um valor"));
    somatorio += num;
    cont2++;
    media = somatorio / cont2;
    texto = "O somatório de todos os números digitados é: " + somatorio + ".";
    texto1 = "O programa foi executado " + cont2 + " vezes.";
    texto2 = "A média aritmética dos valores digitados foi de: " + media + ".";
    texto3 += num + "... ";
} while (num >= 0);


document.getElementById("testando").innerHTML = texto3;
document.getElementById("teste").innerHTML = texto;
document.getElementById("teste1").innerHTML = texto1;
document.getElementById("teste2").innerHTML = texto2;