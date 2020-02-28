var persona1 = {
	nombre: "daniel",
	edad: 19
};

var persona2 = {
	nombre: "david",
	edad: 19
};

var persona3 = {
	nombre: "andres",
	edad: 22
};

var personas = [persona1, persona2, persona3];

console.log(personas);

for ( var i = 2; i < personas.length; i++)
{

console.log(`${persona1.nombre} tiene una edad de ${persona1.edad}`)
console.log(`${persona2.nombre} tiene una edad de ${persona2.edad}`)
console.log(`${persona3.nombre} tiene una edad de ${persona3.edad}`)
	
}