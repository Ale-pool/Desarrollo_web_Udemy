
// como unir dos diferentes clases objecto (Spread operator)

const producto = {
    nombreproducto : "Monitor HD",
    precio: 300,
    disponible: true
}

const medidas = {
     peso: '1kg',
     medida : '1 metro',
     color : 'rojo'
}


// unir

const objectocasa = {...mesa, ...silla}
console.log(objectocasa)







const nuevoProducto = {...producto, ...medidas}
console.log(nuevoProducto)