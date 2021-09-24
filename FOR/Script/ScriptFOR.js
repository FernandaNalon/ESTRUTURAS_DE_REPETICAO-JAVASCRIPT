var texto = "";

// para cont de 1 ate 10 passo 1 faca.
for (let cont = 1; cont < 11; cont++) {
    texto += "<br>" + "O número é: " + cont;
}
document.getElementById("teste").innerHTML = texto;