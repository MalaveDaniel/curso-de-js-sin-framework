var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);

dibujarLinea("pink",10, 300, 220, 10);
dibujarLinea("black",300, 10, 10, 220);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}

// inicia el canvas
const c = document.getElementById("canv");
const ctx = c.getContext("2d");
const cw = (c.width = 200);
const ch = (c.height = 200);
const cx = cw / 2,
  cy = ch / 2;
// define el grosor de línea  
ctx.lineWidth = 4;
// define el color de línea  
ctx.strokeStyle = "crimson";


// el algoritmo del corazón
function corazon(r, paso) {
  let puntos = [];
  for (var a = 0; a < 2 * Math.PI; a += paso) {
    let p = {};
    p.x = cx + 16 * r * (Math.sin(a) * Math.sin(a) * Math.sin(a));
    p.y =
      cy -
      13 * r * Math.cos(a) +
      5 * r * Math.cos(2 * a) +
      2 * r * Math.cos(3 * a) +
      1 * r * Math.cos(4 * a);
    puntos.push(p);
  }
  return puntos;
}



function dibujarCorazonEnCanvas() {
  // crea un array vacío para guardar los puntos
  let puntos = corazon(5, 0.05);
  // empieza el trazado
  ctx.beginPath();
  // mueve el puntero al primer punto del array
  ctx.moveTo(puntos[0].x, puntos[0].y);
  // dibuja el corazon 
  puntos.forEach(p => {
    ctx.lineTo(p.x, p.y);
  });
  // cierra el trazado
  ctx.closePath();
  // dibuja el corazón
  ctx.stroke();
}


dibujarCorazonEnCanvas();