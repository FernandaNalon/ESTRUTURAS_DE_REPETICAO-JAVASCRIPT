var cont = 0;
var pares = 0;

while (cont <= 500) {
    if (cont % 2 == 0) {
        pares += cont;
    }
    cont++;
}
document.getElementById("teste").innerHTML = pares;