/*Desafio 09 */
   
let primeiroNum = Number(prompt('Olá, digite o primeiro número?'))
let segundoNum = Number(prompt('Olá, digite o segundo número?'))
let diferenteOuIgual = primeiroNum === segundoNum ? 'Números iguais ' : ' Números diferentes '

let soma = primeiroNum + segundoNum
let subtrair = primeiroNum - segundoNum
let multiplicacao = primeiroNum * segundoNum
let divisao = primeiroNum / segundoNum
let restoDivisao =  primeiroNum % segundoNum
alert(`Valor da soma ${soma}, valor da subtração ${subtrair}, valor da multiplicação ${multiplicacao},
valor da divisão ${divisao}, valor do resto da divisão ${restoDivisao}, e se os números digitados é diferentes ou 
iguais ${diferenteOuIgual}`)

let resultadoDivisao = soma % 2 
if(resultadoDivisao === 0) {
     alert(`O resultado da sobra da divisao é ${resultadoDivisao} par`)
}else{
  alert(`O resultado da sobra da divisao é ${resultadoDivisao} impar`)
}