var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keyup", moverVaca)
var xvaca= 0;
var yvaca= 0;
var movimiento = 10;

var teclas = {

  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);



var fondo = 
{
   url: "tile.png",
   cargaOK: false
};

var vaca = 
{
	url: "vaca.png",
	cargaOK: false
};

var cerdo = 
{
	url: "cerdo.png",
	cargaOK: false
};

var pollo = 
{
	url: "pollo.png",
	cargaOK: false
};


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);



vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);


cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
	fondo.cargaOK = true;
	dibujar();
}

function cargarVacas()
{
	vaca.cargaOK = true;
	dibujar();
}

function cargarCerdos()
{
	cerdo.cargaOK = true;
	dibujar();
}

function cargarPollos()
{
	pollo.cargaOK = true;
	dibujar();
}

function dibujar()
{
	if (fondo.cargaOK == true) 
	{

		papel.drawImage(fondo.imagen, 0, 0);

	}
	if (vaca.cargaOK == true) 
	{

		/*var cantidad = aleatorio(5,25);
		console.log(cantidad);*/
		for(var v =0; v<1; v++)
			{
			papel.drawImage(vaca.imagen, xvaca, yvaca);

			}
		
	}
	/*if (cerdo.cargaOK == true) 
	{
		var cantidad = aleatorio(5,25);
		console.log(cantidad);
		for(var c =0; c<cantidad; c++)
		{


			var x = aleatorio(0, 7);
			var y = aleatorio(0, 7);
			var x = x*60;
			var y = y*60;

			papel.drawImage(cerdo.imagen, x, y);
		}
	}
	if (pollo.cargaOK == true) 
	{
		var cantidad = aleatorio(5,25);
		console.log(cantidad);
		for(var p =0; p<cantidad; p++)
		{


			var x = aleatorio(0, 7);
			var y = aleatorio(0, 7);
			var x = x*60;
			var y = y*60;

			papel.drawImage(pollo.imagen, x, y);
		}
	}*/
}


function aleatorio (min, maxi)
{
	var resultado;
	resultado = Math.floor (Math.random() * (maxi - min + 1)) + min;
	return resultado;
}

function moverVaca(evento)
{

	switch(evento.keyCode)
 {
 	case teclas.UP:
 	yvaca = yvaca - movimiento;
 	dibujar();
 	break;
 	case teclas.DOWN:
 	yvaca = yvaca + movimiento;
 	dibujar();
 	break;
 	case teclas.RIGHT:
 	xvaca = xvaca + movimiento;
 	dibujar();
 	break;
 	case teclas.LEFT:
 	xvaca = xvaca - movimiento;
 	dibujar();
 	break;
 	default:
 	console.log("Otra tecla");
 	break;
 }
}