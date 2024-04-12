// arrays  - arreglos ( un ejemplo puede ser un carrito de compras)

const numeros= [10,20,30,40,50];
const notas = [4,5,2,1,3,5,2,5]
//console.table(numeros)
console.table(notas)
const meses =['enero','Febrer0', 'Marzo','abril'];
//console.table(meses);



/* how to access the values of an array 

console.log(meses[1]);
console.log(numeros[4]);
console.log(numeros[8])

// know the extension of array

console.log(meses.length)

numeros.forEach( function(numeros) {
    console.log(numeros);
}) */


// methods for the arrays push

notas.push(60, 63, 66) // agrega al final del arreglo
notas.unshift(-10,-20,-40) // agrega al inicio del arreglo 
// Delete elements of arrays 
notas.pop() // elimina el ultimo elemento del arreglo
notas.shift() // elimina el primer elemento del arreglo
//console.table(meses);
// eliminar un elemento especifico del arreglo 
//meses.splice(2,1)
//console.table(meses)

// rest operator o spread operator 

const nuevoarreglo = [...meses,'junio'];
console.log(nuevoarreglo)

