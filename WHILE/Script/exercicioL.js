var num = 0;
var maior = 0;
var menor = 0;
var texto = "";
var texto2 = "";
while (num >= 0) {
    num = +(prompt("Digite um número"));
    if (num > maior) {
        maior = num;
    }
    if (num < menor) {
        menor = num;
    }
    texto = "O maior valor digitado foi: " + maior;
    texto2 = "O menor valor digitado foi: " + menor;
}
document.getElementById("teste").innerHTML = texto;
document.getElementById("teste2").innerHTML = texto2;