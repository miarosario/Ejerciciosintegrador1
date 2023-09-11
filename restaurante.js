var entrada = parseInt(prompt("Ingrese el monto de la entrada"));
var segundo = parseInt(prompt("Ingrese el monto del segundo plato"))
var postre = parseInt(prompt("Ingrese el monto del postre"));

var total = entrada + segundo + postre;

var igv= total * 18 /100;

var totalfinal = total + igv

console.log("Entrada: "+entrada);
console.log("Segundo: ")