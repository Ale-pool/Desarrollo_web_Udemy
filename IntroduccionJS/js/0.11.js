const producto = {
    nombre_producto : "computador HD",
    precio: 100,
    disponible : true,
    color: "blanco"
}

producto.tamaño = "alto"
delete producto.tamaño
console.log(producto)
// forma anterior   -- renombrar una varible anterior
// const precioproducto = producto.precio
// const nombreproducto = producto.nombre_producto
// const tipo_diseño = producto.color

console.log(tipo_diseño)

// destructuring objects

const {precio, nombre_producto} = producto;

console.log(`precio: ${precio} Nombre:${nombre_producto}`)

