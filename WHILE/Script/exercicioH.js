var grausF = 0;
var cont = 10;
var texto = "";

while (cont <= 100) {
    grausF = ((9 * cont) + 160) / 5;
    texto += "<br>" + "Quando forem: " + cont + "° Celsius, serão: " + grausF + "° Fahrenheit.";
    cont += 10;
}
document.getElementById("teste").innerHTML = texto;