// Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula  VOLUME   COMPRIMENTO * LARGURA * ALTURA. 

let comprimento = parseFloat(prompt("Informe o comprimento: "));

let largura = parseFloat(prompt("Informe o largura: "));

let altura = parseFloat(prompt("Informe o altura: "));

let volume = comprimento * largura * altura;

alert("O volume da caixa Retangular é de: " + volume.toFixed(2) + "cm³");


