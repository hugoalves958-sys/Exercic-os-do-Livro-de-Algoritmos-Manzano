// ) Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de  conversão é F   (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. 

let valorc = parseFloat(prompt('Informe a Temperatura em Graus Celsius: '));

let resultado = (valorc * 9 + 160) / 5;

alert("A temperatura convertida para Fahrenheit é de: " + resultado + "°F");

