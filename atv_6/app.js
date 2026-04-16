function criarFrase(nome, idade) {
    return `oiee meu nome é ${nome} e eu tenho ${idade} anos`
}

const calcularDobro = function(numero) {
    return numero * 2
}

const somar = (a, b) => a + b

const verificarParOuImpar = (numero) => {
    if (numero % 2 === 0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}

console.log(criarFrase("Victor", 25))

let testeDobro = calcularDobro(7)
console.log(`dobro de 7: ${testeDobro}`)

let testeSoma = somar(1, 2)
console.log(`1 + 2: ${testeSoma}`)

console.log(`1 é: ${verificarParOuImpar(1)}`)
console.log(`13 é: ${verificarParOuImpar(13)}`)