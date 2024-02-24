const producto = {
    nombre_producto : "computador HD",
    precio: 100,
    disponible : true
}


// forma anterior 
const precioproducto = producto.precio
const nombreproducto = producto.nombre_producto

console.log(nombreproducto)

// destructuring objects

const {precio, nombre_producto} = producto;

console.log(`precio: ${precio} Nombre:${nombre_producto}`)

