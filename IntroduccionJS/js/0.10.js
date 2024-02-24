// Objectos en js

 /*const nombre_producto = "computador HD"
const precio = 400;
const disponible = true;*/



const producto = {
    nombre_producto : "computador HD",
    precio: 400,
    disponible : true
}

console.log(producto)
//console.log(producto.disponible)
// otra forma de mostrar la variable en especifico
//console.log(producto["precio"]);

// agregar nuevas propiedades

producto.imagen = 'imagen.jp'

// eliminar variables

delete producto.disponible