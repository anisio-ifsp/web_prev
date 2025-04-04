type Pessoa = {
    nome: string;
    idade: number;
}

const pessoas: Pessoa[] = [
    { nome: 'João', idade: 30 },
    { nome: 'Maria', idade: 25 }
    ];

const numeros: number[] = [10, 2, 100, 5];

const frutas = ['banana', 'maçã', 'laranja', 'abacaxi'];

frutas.sort();
console.log(frutas)
	
// Ordem crescente
numeros.sort((a: number, b: number) => a - b);
// Ordem decrescente
numeros.sort((a: number, b: number) => b - a);



// Ordenar por idade crescente
pessoas.sort((a: Pessoa, b: Pessoa) => a.idade - b.idade);

console.log(pessoas)

// Ordenar por nome (ordem alfabética)
pessoas.sort((a: Pessoa, b: Pessoa) => 
a.nome.localeCompare(b.nome));

console.log(pessoas)