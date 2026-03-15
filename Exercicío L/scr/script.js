// Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à  soma dos quadrados dos três valores lidos. 

let a = parseFloat(prompt("Informe o valor de A: "));
let b = parseFloat(prompt("Informe o valor de B: "));
let c = parseFloat(prompt("Informe o valor de C: "));

let resultado = (a * a) + (b * b) + (c * c);

alert("A soma dos quadrados do três valores lidos: " + resultado);