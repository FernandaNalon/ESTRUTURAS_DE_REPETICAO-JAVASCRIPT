var base = +(prompt("Digite a base a ser multiplicada: "));
var expoente = +(prompt("Digite o expoente que desejar: "));
var texto = "";
var cont = 1;
var resultado = 1;

// para cont de 1 ate 10 passo 1 faca.
for (cont; cont <= expoente; cont++) {
    resultado = resultado * base;
    texto = "A base " + base + " elevada ao expoente " + expoente + " será igual a: " + resultado + ".";
}
document.getElementById("teste").innerHTML = texto;