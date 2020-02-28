var numeros= [1,6,8,4,2,7,10,3,5];
var par = "";
var impar = "";
var numero= "";
for (var i = 0; i < numeros.length; i++)
 {
 numero = numeros[i];
 if(numero % 2 === 0)
 {
 	par = numero
  console.log("el numero es par:" + par);

 }else
 {
 	impar = numero
	console.log("el numero es impar: " + impar);
 }
}
