var somatorio = 0;
var pares = 0;
var texto = "";

for (let cont = 1; cont <= 500; cont++) {
    if (cont % 2 == 0) {
        texto += cont + "... ";
        somatorio += cont;
        texto2 = "a somatória dos números pares de 1 á 500 é: " + somatorio + ".";
    }
}
document.getElementById("teste").innerHTML = texto;
document.getElementById("teste2").innerHTML = texto2;