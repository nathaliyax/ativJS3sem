console.log("FOR")
for (let i = 1; i <= 10; i++) {
    console.log("Número:", i)
}

console.log("--- LAÇO WHILE ---")
let par = 2
while (par <= 20) {
    console.log("Par:", par)
    par += 2
}

console.log("WHILE")

let tentativas = ["0000", "senha1", "admin", "1234"]
let indice = 0
let senha

do {
    senha = tentativas[indice]
    console.log(`Testando a senha: ${senha}`)
    indice++
} while (senha !== "1234")

console.log("Acesso liberado! Senha correta inserida no terminal.")