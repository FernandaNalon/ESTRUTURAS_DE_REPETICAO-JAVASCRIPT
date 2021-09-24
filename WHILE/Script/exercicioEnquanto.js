let texto = "";
let cont = 0;

while (cont < 10) {
    texto += "<br> O número é " + cont;
    cont++;
}
document.getElementById("teste").innerHTML = texto;