var cont = 1;
var n1 = -1;
var n2 = 1;
var n3 = 0;
var texto = "";

for (cont; cont <= 15; cont++) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    texto += n3 + "... ";
}
document.getElementById("teste").innerHTML = texto;