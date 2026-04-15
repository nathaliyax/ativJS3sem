let nome = "Nathalia"
let idade = 22
let cidade = "nathalhandia"

let num1 = 10
let num2 = 2


let frase = "Meu nome é " + nome + ", tenho " + idade + " anos e moro na " + cidade
console.log(frase);

console.log("fazendo matematiquices com os numeros escolhidos: 10 e 2")
console.log("Soma entre os numeros:", num1 + num2)
console.log("Subtração entre os numeros:", num1 - num2)
console.log("Produto entre os numeros:", num1 * num2)
console.log("Divisão entre os numeros:", num1 / num2)

let fraseTemplate = `Olá! Meu nome é ${nome}, tenho ${idade} anos e moro na ${cidade}`
console.log(fraseTemplate)