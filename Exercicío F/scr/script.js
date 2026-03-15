// Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de  forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados 

let A = (prompt("Informe o primeiro valor:"));

let B = (prompt("Informe o segundo valor: "));

let auxiliar = A;

A = B;

B = auxiliar;

alert("O Valor de A é: " + A + "\n" + 
    "O valor de B é: " + B
);