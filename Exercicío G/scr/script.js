// Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na  utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim  C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de  multiplicação e apresentar doze resultados de saída. 

let A = parseInt(prompt("Informe o primeiro valor: "));

let B = parseInt(prompt("Informe o segundo valor: "));

let C = parseInt(prompt("Informe o terceiro valor: "));

let D = parseInt(prompt("Informe o quarto valor: "));

// Soma
let soma1 = A + B;
let soma2 = A + C;
let soma3 = A + D;
let soma4 = B + C;
let soma5 = B + D;
let soma6 = C + D;

//Multiplicação

let mult1 = A * B;
let mult2 = A * C;
let mult3 = A * D;
let mult4 = B * C;
let mult5 = B * D;
let mult6 = C * D;

alert("Valores Informados" + "\n" +
    "Adições \n" +
    "N°1: " + soma1 + "\n" +
    "N°2: " + soma2 + "\n" +
    "N°3: " + soma3 + "\n" +
    "N°4: " + soma4 + "\n" +
    "N°5: " + soma5 + "\n" +
    "N°6: " + soma6 + "\n" +
    "Multiplicações \n" + 
    "N°1: " + mult1 + "\n" +
    "N°2: " + mult2 + "\n" +
    "N°3: " + mult3 + "\n" +
    "N°4: " + mult4 + "\n" +
    "N°5: " + mult5 + "\n" +
    "N°6: " + mult6 + "\n" 
);

