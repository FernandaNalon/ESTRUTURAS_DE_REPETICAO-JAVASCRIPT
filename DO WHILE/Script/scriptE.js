var cont = 1;
var somatorio = 0;
var texto = "";
var texto1 = "";
do {
    var num = +(prompt("Digite um número: "));
    var fatorial = 1;
    var contador = 0;
    do {
        fatorial += fatorial * contador;
        contador++;
    } while (contador < num);
    somatorio += fatorial;
    texto += "O fatorial do número: " + num + " é igual a: " + fatorial + ". <br>";
    cont++;
} while (cont <= 15);

texto1 += "O somatório de todos os fatoriais é igual a: " + somatorio;
document.getElementById("teste").innerHTML = texto;
document.getElementById("teste1").innerHTML = texto1;