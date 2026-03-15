//  Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em  real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível  com o usuário, para que seja apresentado o valor em moeda americana. 

let cotacao = parseFloat(prompt("Informe o valor da cotação do dólar: "));
let reais = parseFloat(prompt("Informe a quantidade em reais: "));

let dolar = reais / cotacao;

alert("Conversão \n" +
    "Cotação: " + "$" +  cotacao.toFixed(2) + "\n" + 
    "Quantidade de Reais: " + "R$" + reais.toFixed(2) + "\n" + 
    "Valor em Dólares: " + "$ " + dolar.toFixed(2)
);

