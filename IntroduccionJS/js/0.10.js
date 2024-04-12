// Objectos en js

 /*const nombre_producto = "computador HD"
const precio = 400;
const disponible = true;*/

const zapatos = {
    nombre : "k-tenis",
    talla: "M",
    precio: 200
}

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
zapatos.color = "azul"
// eliminar variables

delete producto.disponible
delete zapatos.talla
console.log(zapatos)
console.log(zapatos.precio)