// Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em  dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares  disponível com o usuário, para que seja apresentado o valor em moeda brasileira.

let cotacao = parseFloat(prompt("Informe o valor da cotação do dólar: "));
let dolar = parseFloat(prompt("Informe a quantidade de dólares: "));

let reais = dolar * cotacao;

alert("Conversão \n" +
    "Cotação: " + "$" +  cotacao.toFixed(2) + "\n" + 
    "Quantidade de Dólares: " + "$" + dolar.toFixed(2) + "\n" + 
    "Valor em Reais: " + "R$ " + reais.toFixed(2)
);

