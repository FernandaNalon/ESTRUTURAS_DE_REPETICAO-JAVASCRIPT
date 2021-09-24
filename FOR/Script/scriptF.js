var texto = "";
var divisiveis = 0;

for (let cont = 1; cont <= 200; cont++) {
    if (cont % 4 == 0) {
        divisiveis = cont;
        texto += cont + "... ";
    }
    document.getElementById("teste").innerHTML = texto;
}