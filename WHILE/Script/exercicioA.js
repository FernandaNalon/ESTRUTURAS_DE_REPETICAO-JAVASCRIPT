var num = +(prompt("Digite um número: "));
var cont = 1;
text = "";

while (cont <= 10) {
    var result = cont * num;
    text += ("<br>" + cont + " X " + num + " = " + result);
    cont++;
}
document.getElementById("teste").innerHTML = text;
