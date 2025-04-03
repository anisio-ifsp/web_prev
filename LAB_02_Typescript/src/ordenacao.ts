let numbers1: number[] = [34, 89,1,5, 9]

let menor: number =0;

for( const i of numbers1){
    let aux = i
    for(const j of numbers1){
        if(aux > j){
            menor = j
            aux= menor
        }
    }
}

console.log(menor)