var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var xi, yf;
var colorcito = "#FAA"
var m = 0;
var n = 0;
console.log(lienzo);

for(l = 0; l < lineas; l++)
{
	yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea(colorcito,0, yi, xf, 300);
	console.log("linea " + l);
	
}

for (m = 0; m < lineas; m++)
{
xi = 10 * m;
yf = 10 * (m + 1);
dibujarLinea(colorcito, xi,0, 300, yf);
}

dibujarLinea(colorcito, 1,1,1,299);
dibujarLinea(colorcito, 1,299,299,299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}
