var cont = 1;
var soma = 0;

while (cont <= 100) {
    soma += cont;
    cont++;
}
document.getElementById("teste").innerHTML = soma;