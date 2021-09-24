let text = ""
let cont = 0;

do {
    text += "<br> O número é " + cont;
    cont++;
}
while (cont < 10);
document.getElementById("teste").innerHTML = text;