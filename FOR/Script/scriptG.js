var texto = "";
var potencia = 1;

for (let expoente = 0; expoente <= 15; expoente++) {
    texto += "<br>" + "3 elevado ao expoente: " + expoente + " = " + potencia + ".";
    potencia = potencia * 3;
}
document.getElementById("teste").innerHTML = texto;