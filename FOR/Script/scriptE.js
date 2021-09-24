var texto = "";
var impares = 0;

for (let cont = 1; cont <= 20; cont++) {
    if (cont % 2 == 1) {
        impares = cont;
        texto += cont + "... ";
    }
    document.getElementById("teste").innerHTML = texto;
}