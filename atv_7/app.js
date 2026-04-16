let frutas = ["goiaba", "lixia", "pera", "tomate", "kiwi"]
frutas.push("maça")
frutas.pop()
frutas.unshift("manga")
frutas.shift()

let num = [1, 74, 6, 24, 11, 7, 4, 19, 54, 3]

let pares = num.filter(n => n % 2 === 0)

let quadrados = num.map(n => n * n)

let soma = num.reduce((acc, n) => acc + n, 0)

let ordenados = [...num].sort((a, b) => a - b)
let invertidos = [...ordenados].reverse()

console.log("Lista de frutas depois de mudnças:", frutas)
console.log("números originais:", num)
console.log("números pares:", pares)
console.log("números ao quadrado:", quadrados)
console.log("soma dos números:", soma)
console.log("ordenados:", ordenados)
console.log("onvertidos:", invertidos)