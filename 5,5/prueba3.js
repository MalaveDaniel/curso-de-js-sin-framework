function imprimirTtabla(base, limite) {


for(let i = 1; i <= limite; i++){

var resultado = base * i;

console.log(base + " x "+ i + " = " + resultado);
	}

}

imprimirTtabla(10, 5);
imprimirTtabla(3, 10);

