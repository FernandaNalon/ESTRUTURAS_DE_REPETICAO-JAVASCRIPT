cont = 0;
impar = 0;

while (cont <= 20) {
    if (cont % 2 == 1) {
        impar += "<br>" + cont;
        document.getElementById("teste").innerHTML = impar;
    }
    cont++;
}