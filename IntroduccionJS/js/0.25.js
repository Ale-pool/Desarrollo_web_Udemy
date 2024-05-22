const carrito = [
    {nombre: 'monitor 20 pulgadas', precio: 500},
    {nombre: 'table de 18 pulgadas', precio: 160},
    {nombre: 'impresora Hp', precio: 420},
    {nombre: 'telefono lenovo', precio: 382},
    {nombre: 'equipo de audio', precio: 263},
    {nombre: 'consola de videojuego', precio: 372},
    {nombre: 'tablero', precio: 428},
    {nombre :'nevera', precio:289}
]


const motos = [
    {nombre: 'moto1', precio: 520},
    {nombre: 'moto2',precio: 160},
    {nombre: 'moto3',precio: 420},
    {nombre: 'moto4',precio: 382},
    {nombre: 'moto5',precio: 263},
    {nombre: 'moto6',precio: 372},
    {nombre: 'moto7',precio: 428},
    {nombre :'moto8',precio:289}
]	



// foreach y map solo se ejecutan en arreglos
// forEach es un método de las arrays de JavaScript que se utiliza para iterar 
// sobre los elementos de un array y ejecutar una función determinada en cada uno de ellos.
//  A diferencia del bucle for , forEach no tiene un contador y no permite la interrupción 
//  o el salto de iteración.

 const array1 = carrito.forEach(producto => producto.precio)
 const array2 = motos.map(producto =>  producto.nombre);
// map


const arreglo1 = carrito.map(producto=>producto.nombre) // cuando quiera iterar o mostrar algo en consola se debe utilizar el forEach
const arreglo2 = motos.map((producto) => producto.nombre);  // Si quieres crear un nuevo arreglo  utiliza el map


const array3 = motos.map(producto => `${producto.nombre} , ${producto.precio}`)
console.log(array1)
console.log(array2);
console.log(array3)


