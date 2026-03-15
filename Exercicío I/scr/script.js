// Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo  segundo. 

let a = parseFloat(prompt("Informe o valor de A: "));
let b = parseFloat(prompt("Informe o valor de B: "));

let diferenca = a - b;

let resultado = diferenca * diferenca;

alert("O resultado é: " + resultado);