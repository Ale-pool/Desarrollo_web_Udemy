"use strict"; // correr js en modo estricto 
// object methods 


// diferencia entre . freeeze and .seal es que seal si me permite modificar las propiedades existententes mientras que .freese no me permito 
// modificar nada

const producto = {
    nombre_producto : "computador HD",
    precio: 400,
    disponible : true
}

Object.seal(producto); // permite no agregar nuevas variables al objecto

console.log(producto)
producto.nombre_producto = "Celular Phone-16"
delete producto.talla
// producto.imagen = 'imagen.jpg'

// ckonsole.log(Object.isFrozen(producto))  // como saber si un metodo esta sellado;
// console.log(ise)
// console.log(producto)