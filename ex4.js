const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// criando um array de faturamento na variavel valores e fazendo um for para criar a soma total dos faturamentos.
let totalFaturamento = 0;
const valores = Object.values(faturamento);

for (let i = 0; i< valores.length; i++) {
     totalFaturamento +=  valores[i];
}
console.log(`Faturamento Total: R$ ${totalFaturamento.toFixed(2)}`);


//object.keys para pegar os nomes dos estados e crair um array. Depois percorrendo o array para pegar a porcentagem de faturamento de cada estado.
const estados = Object.keys(faturamento);
console.log('\nPercentual de faturamento de cada estado:')
for (let j = 0; j < valores.length; j++){
    const percentual = (valores[j] / totalFaturamento) * 100;
    console.log(`${estados[j]}: ${percentual.toFixed(2)}%`);
}



/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/