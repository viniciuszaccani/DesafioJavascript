//A variavel string é o valor que será invertido;
let string = "Socorram-me, subi no ônibus em Marrocos -----"
let invertido = ""

//aqui o for percorre a string de trás para frente, pega o caractere atual e adiciona na variaval 'invertido';
for (let i = (string.length - 1); i>=0; i--){
    invertido += string[i];
}

console.log(`frase original: \n${string} \nResultado: \n${invertido}`)






/*

5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

*/