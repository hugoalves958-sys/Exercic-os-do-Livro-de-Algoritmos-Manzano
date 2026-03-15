// Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula  PRESTACAO   VALOR + (VALOR * TAXA/100) * TEMPO). 

let valorDaFatura = parseFloat(prompt("Insira o valor da Fatura: "));

let taxa = parseFloat(prompt("Informe o valor do Juros %: "));

let tempo = parseFloat(prompt("Informe o tempo de atraso em meses: "));

let resultado = valorDaFatura + ((valorDaFatura * taxa / 100) * tempo);

alert("Informções da Prestação \n" + 
"O valor da Fatura é de: " + "R$" + valorDaFatura.toFixed(2) + "\n" +
"O Juros é de: " + taxa + "%\n" + 
"O tempo de atraso foi de: " + tempo + " meses\n" +
"O Valor final vai ser de: " + "R$" + resultado.toFixed(2)
);