let numberOne = Number(prompt('Digite um número: '))
let numberTwo = Number(prompt('Digite outro número: '))

let totSoma = numberOne + numberTwo
let totSub = numberOne - numberTwo
let totMult = numberOne * numberTwo
let totDiv = numberOne / numberTwo
let totResto = numberOne % numberTwo

alert(`A soma entre o número ${numberOne} e ${numberTwo} é: ${totSoma.toFixed(2).replace(".", ",")}`)
alert(`A subtração entre o número ${numberOne} e ${numberTwo} é: ${totSub.toFixed(2).replace(".", ",")}`)
alert(`A multiplicação entre o número ${numberOne} e ${numberTwo} é: ${totMult.toFixed(2).replace(".", ",")}`)
alert(`A divisão entre o número ${numberOne} e ${numberTwo} é: ${totDiv.toFixed(2).replace(".", ",")}`)
alert(`O resto da divisão entre o número ${numberOne} e ${numberTwo} é: ${totResto.toFixed(2).replace(".", ",")}`)


if (totSoma % 2 == 0) {
     alert('A soma dos dois números é PAR!')    
}else {
    alert('A soma dos dois números é IMPAR!')             
}

if (numberOne != numberTwo) {
    alert('Os números inseridos são DIFERENTES!')
}else {
    alert('Os números inseridos são IGUAIS!')
}