var cont = 1;
var divisiveis = 0;
var texto = "";

do {
    if (cont % 4 == 0) {
        divisiveis = cont;
        texto += divisiveis + "... ";
    }
    cont++;
} while (cont <= 200)

document.getElementById("teste").innerHTML = texto;