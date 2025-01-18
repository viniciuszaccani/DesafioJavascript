function verificarFibonacci(num) {
    let a = 0;
    let b = 1;

    //verificando se o numero informado é 0 ou 1;
    if(num ===a || num ===b){
        console.log(`O numero ${num}pertence a sequencia de Fibonacci.`)
        return;
    }

    //fazendo a sequencia de Fibonacci para verificar se o numero informado faz parte da sequencia ou não. o codigo segue enquanto proximo for menor ou igual ao numero informado.
    let proximo = a + b;
    while (proximo <= num) {
        if (proximo === num) {
            console.log(`O número ${num} pertence a sequência de Fibonacci.`)
            return;
        }
        a = b;
        b = proximo;
        proximo = a + b;
    }
    console.log(`O número ${num} não pertence a sequência de Fibonacci.`)
}


//chamando a função.
verificarFibonacci(22);




/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

*/
