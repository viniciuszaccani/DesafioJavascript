const fs = require('fs');  // Carregando o módulo fs, utilizando dessa maneira para evitar instalação de node modules e etc.

fs.readFile('./dados.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  // Convertendo JSON em JavaScript
  const faturamentos = JSON.parse(data);


  let menorValor = Infinity; //infinity pois o valor nao pode ser zero.
  let maiorValor = 0;

  let somaValores = 0;
  let diasTrabalhados = 0;

  //passando por todos os campos do faturamentos para pegar os dias trabalhados(valor maior que zero), montar a soma e pegar o maior e menor valor.
  faturamentos.forEach(element => {
    console.log(element.valor)
    if(element.valor > 0){
        somaValores += element.valor;
        diasTrabalhados++;
    }
    if(element.valor > maiorValor){
        maiorValor = element.valor
    }
    if(element.valor < menorValor && element.valor > 0){
        menorValor = element.valor;
    }

  });

  const media = somaValores / diasTrabalhados; //calculando a média

  //passando pelo faturamento novamente para poder pegar a quantidade de dias acima da media.
  let diasAcimaMedia = 0;
  faturamentos.forEach(element => { 
    if (element.valor > media) {
      diasAcimaMedia++;
    }
  });


  
  console.log(`A média dos faturamentos é: R$ ${media.toFixed(2)}`);
  console.log(`Número de dias com faturamento acima da média: ${diasAcimaMedia}`);
  console.log(`Maior valor: R$ ${maiorValor.toFixed(2)}`)
  console.log(`Menor valor: R$ ${menorValor.toFixed(2)}`)

});




/* 

3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;


*/