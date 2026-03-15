// Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o  quadrado da soma dos três valores lidos. 

let a = parseFloat(prompt("Informe o valor de A: "));
let b = parseFloat(prompt("Informe o valor de B: "));
let c = parseFloat(prompt("Infomre o valor de C: "));

let resultado = (a + b + c) ** 2;

alert("O quadrado da soma dos três valores é de: " + resultado);