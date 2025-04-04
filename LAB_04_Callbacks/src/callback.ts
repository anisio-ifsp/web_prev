function concatenar( a: string, b: string ):void{
    var op = a + " " + b;
    console.log("A operacao efetuada resultou em: " + op);
}

function somar( a: number, b: number ):void{
    var op = a + b;
    console.log("A operacao efetuada resultou em: " + op);
}


function imprimir(value:any):void{
    console.log("A operacao efetuada resultou em: " + value);
}


function concatenar1( a: string, b: string, callback:(param: string) => void):void{
    var op = a + " " + b;
    callback(op);
}

function somar1( a: number, b: number, callback: (param: number) => void ):void{
    var op = a + b;
    callback(op);
}

concatenar1("Hello", "World", imprimir);
somar1(2, 2, imprimir);