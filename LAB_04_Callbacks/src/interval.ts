
setInterval(() => console.log("Executando o setInterval."), 2000);

console.log("Depois do setInterval.")

let contador = 0;

let interval = setInterval(() => {
		contador++;
		console.log("Rodando o setInterval");
		if (contador === 3) {
            console.log("Intervalo cancelado apos 3 execucoes.");
			clearInterval(interval);
		}
}, 500);
	

