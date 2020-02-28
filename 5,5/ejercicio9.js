function filtrarPorLetra (arr, letra){

let nuevoArr= []


for(var i =0; i<arr.length; i++){

var nombre = arr[i];


if(nombre[0] === letra){


	nuevoArr.push(nombre);
}



}




return nuevoArr;

}




var heroes = ["doom", "dr strange", "hulk", "she hulk", "spiderman", "capitan marvel"]
var heroesCon = filtrarPorLetra(heroes,"d");
console.log(heroesCon);