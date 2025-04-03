let frase:string = "Trabalhando com funções em TypeScript"

let vetFrase: string[] = frase.split(" ")


let resultadoFrase = vetFrase.filter(f => f === "Trabalhando");
console.log(resultadoFrase)

let arrayNumbers: number[] = [1,2,3,4,5,6]
let resultadoNumbers = arrayNumbers.filter(n => n > 4);
console.log(resultadoNumbers)