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


// foreach y map solo se ejecutan en arreglos


  carrito.forEach(producto=>console.log(producto.precio))


// map


const arreglo2 = carrito.map(producto=>producto.precio)


console.log(arreglo2)