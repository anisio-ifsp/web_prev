function message(frase:string):string{
    return frase
}

const message1 = (frase:string):string => frase

console.log(message1("Hello World"))

function imprime():void{
    console.log("Alguma mensagem")
}

const imprime1 = () => console.log("Alguma coisa")

function soma(a:number, b:number, c?:number):number{
    if(c){
        return a + b + c
    }else{
        return a + b
    }
}

const soma1 = (a:number, b:number, c?:number):number => {
    if(c){
        return a + b + c
    }else{
        return a + b
    }
}

console.log( soma( 4, 2, 2), soma( 5, 3))
console.log( soma1( 4, 2, 2), soma1( 5, 3))


function hello( message:string = "Olá pessoal!"):void{
    console.log(message)
}

hello()