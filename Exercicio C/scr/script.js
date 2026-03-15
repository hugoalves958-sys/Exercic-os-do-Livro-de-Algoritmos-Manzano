// Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: Volume *Raio * Altura 2 ←π

let raio = parseFloat(prompt("Informe o valor do Raio: "));

let altura = parseFloat(prompt("Informe o valor da Altura: "));

let resultado = (raio * raio) * altura * Math.PI;

let formatado = resultado.toFixed(2) + " cm³"

alert("O valor do volume da Lata de Óleo é de: " + formatado);