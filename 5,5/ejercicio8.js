function masLargo(arr){
 
 var nombreLargo = "";
 

   for(var i = 0; i < arr.length; i++){
    var nombre = arr[i];
    if(nombre.length > nombreLargo.length){

    	nombreLargo=nombre;
    }

   }
   return nombreLargo;
}



var heroes =["deadpool", "ciclope", "magneto", "profesor charles xavier"]
var heroeLargo = masLargo (heroes);
console.log(heroeLargo);