let pessoa = {
    nome: "Nathalia",
    idade: 22,
    profissao: "Afagadora profissional de gatinhos",
    apresentar: function() {
        return `oie, meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.profissao}.`
    }
}

let carro = {
    marca: "honda",
    modelo: "civic",
    ano: 2022,
    ligar: function() {
        console.log("carro ligado")
        return "carro ligado"
    }
}

let loja = {
    nome: "Kaboom",
    produtos: ["RTX 2", "PC GAY", "urso de pelucia fofo", "teclado"]
}

console.log("apreentação");
console.log(pessoa.apresentar());

console.log("status do carro");
carro.ligar();

console.log("produtos da loja");
for (let indice in loja.produtos) {
    console.log(`- ${loja.produtos[indice]}`);
}