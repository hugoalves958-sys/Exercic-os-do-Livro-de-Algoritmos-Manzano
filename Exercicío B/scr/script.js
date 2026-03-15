//  Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de  conversão é C   (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. 

let valorF = parseFloat(prompt("Informe a temperatura em Fahrenheit: "));

let resultado = (valorF - 32) * (5/9);

let formatado = resultado.toFixed(0);

alert("A temperatura em Graus Celsius é de: " + formatado + "°C");