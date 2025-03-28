let nome: string = "João";


let age: number = 25;
let ativo: boolean = true;
		
let dado: any = 10;
let vazio: null = null;
let indefinido: undefined = undefined;
		
// Tipos literais (valores específicos)
let situacao: "ativo" | "inativo" = "ativo"; // Só aceita esses dois valores
		
// União de tipos (Union Type)
let idadeOuNulo: number | null = null;

console.log(`Nome: ${nome}, Idade: ${age}, Ativo: ${ativo}`); 


console.log(typeof nome)