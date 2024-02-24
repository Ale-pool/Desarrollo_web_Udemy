
const meses =['enero','Febrer0', 'Marzo','abril','mayo'];

// arrays of abjects 
const carrito = [
    {nombre: 'monitor 20 pulgadas', precio: 500},
    {nombre: 'table de 18 pulgadas', precio: 160},
    {nombre: 'impresora Hp', precio: 420},
    {nombre: 'telefono lenovo', precio: 382},
    {nombre: 'equipo de audio', precio: 263},
    {nombre: 'consola de videojuego', precio: 372},
    {nombre: 'tablero', precio: 128},
    {nombre :'nevera', precio:289}
]

// // foreach

//  meses.forEach( function (mes){
//     console.log(mes);

//  })



 meses.forEach(function(mes) {
     if(mes == 'Marzo'){
         console.log('marzo existe');
    }
 })

 // includes
let resultado = meses.includes('mayo');

// some ideal para algunos arreglos

resultado = carrito.some(function(producto){
    return producto.nombre === 'nevera'
})

// reduce

resultado = carrito.reduce(function(total, producto){
    return  total + producto.precio
}, 0)

// filter 

resultado = carrito.filter(function(producto){
    return producto.precio > 400;
}) 

resultado = carrito.filter(function(producto){
    return producto.nombre !== 'impresora Hp'
})

console.log(resultado)