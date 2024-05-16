const colores = [ "Amarillo", "verde", "blanco", "negro", "azul" , "violeta", "rojo"]

// arreglo de objectos
const productos = [
  { nombre: 'telefono', Precio: 662, disponible: true },
  { nombre: 'Tv', Precio: 123, disponible: true },
  { nombre: 'equipo de sonido', Precio: 123, disponible: true },
  { nombre: 'impresora', Precio: 342, disponible: true },
];

console.log(productos)

console.log(productos.length)
console.log(colores.length)

// foreach
colores.forEach(function(color){
    if(color == "Amarillo"){
        console.log("si esta el color ")
    }
})


// includes - para determinar si un array incluye un determinado elemento, y devuelve true o false en consecuencia

const resultado = colores.includes("verde")
console.log(resultado)

// some ideal para arreglo de objectos

// const result = productos.some(producto => producto.nombre === 'telefono')

// console.log(result)


// reduce se utiliza para reducir un array a un único valor, aplicando una función de reducción 
// a cada elemento del array. La función de reducción toma dos argumentos: un acumulador y el elemento actual del array, y devuelve el valor resultante del acumulador después de aplicar alguna operación

valor = productos.reduce((total, producto) => total + producto.Precio, 0);
console.log(valor)


// El método filter en JavaScript se utiliza para crear un nuevo array 
// con todos los elementos que pasan una prueba implementada por una función proporcionada.

result = productos.filter(producto =>{
         return producto.nombre !== "impresora"
});

console.log(result)

