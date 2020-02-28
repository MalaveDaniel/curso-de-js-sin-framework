class Carro {

	constructor(marca1, tipo1, puertas) {

		this.marca = marca1;
		this.tipo = tipo1;
		this.puertas = puertas;
		this.creadoEn = "hoy";
		this.encendido = false;
		this.gasolina = 100;

	}
  encenderCarro(){

  	if (this.encendido) {

  		console.log("el carro ya esta encendido");
  	}

  	else {


  	this.encendido = true;
  	console.log("el carro esta encendido");
  	}

return this;
  }

  realizarViaje(consumo) 
  {
 
  	if(this.encendido){
      if (consumo>this.gasolina)	
  	 {
       console.log("el carro ya no tiene gasolina, esto tiene actualmente " + this.gasolina);
  	 }
  	 else{


  
  	 this.gasolina = this.gasolina - consumo;

     return "le queda" + this.gasolina;
  	 }
      

  	 }else{
  		console.log("el carro esta apagado");
  	}
  	


  }

}

var carro = new Carro("mazda","Sedan", 2);

console.log(carro);