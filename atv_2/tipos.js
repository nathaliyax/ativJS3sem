
let nome = "Nathalia"
let idade = 22
let ativo = true
let endereco;
let nota = null
let numGrande = 1234567890123456n
let idUnico = Symbol("id")

console.log("teste typeof")

console.log("nome é:", typeof nome)
console.log("idade é:", typeof idade)
console.log("ativo?:", typeof ativo)
console.log("endereco é:", typeof endereco)
console.log("nota é:", typeof nota)
console.log("numero Grande é:", typeof numGrande)
console.log("idUnico é:", typeof idUnico)

console.log("Conversões")

//string para número
let numTexto = "25";
let convertNum = Number(numTexto);
console.log("string 25 convertida para número:", convertNum, "- tipo:", typeof convertNum);

//número para string
let idadeNum = 30;
let convertTexto = String(idadeNum);
console.log("número 30 convertido para string:", convertTexto, "- tipo:", typeof convertTexto);

//número para boolean
let numBooleano = 1;
let convertBoolean = Boolean(numBooleano);
console.log("número 1 convertido para boolean:", convertBoolean, "- tipo:", typeof convertBoolean);



/* diferença entre valor primitivo e referência

  - valores primitivos: copiados por valor

        eles armazenam apenas o dado simples, qualquer mudança na cópia não muda a original


  - valores estruturados: copiados por referência

        eles apontam para um local na memória, copiar um array ou objeto para outra variável, apontaria para o MESMO lugar

*/