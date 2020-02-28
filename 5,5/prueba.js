function notas(nota)
{
if (nota >= 90) {
   notaLetra= "A" 
} else if (nota >=80) {
    notaLetra= "B"
} else if (nota >=70) {
    notaLetra= "C"
} else if (nota >=60) {
    notaLetra= "D"
} else if (nota < 60) {
    notaLetra= "F"
}
console.log(notaLetra + " estas son sus notas");
}
notas(100);
notas(80);
notas(59);