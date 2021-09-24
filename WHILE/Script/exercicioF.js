var base = +(prompt("Digite o valor da base: "));
var expoente = +(prompt("Digite o valor do expoente: "));
var cont = 0;
var potencia = 1;

while (cont < expoente) {
    potencia = potencia * base;
    cont++;
}
document.getElementById("teste").innerHTML = "O resultado da base " + base + " elevada ao expoente " + expoente + "  = " + potencia;