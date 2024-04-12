
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


const mesa = {
    Nombre : "mesa antigua",
    peso: "mediana",
    Altura: 30,
    disponibilidad: true
}


const silla = {
    color: "azulado",
    peso: 10,
    origen: "colombia",
    disponibilidad: true
}
// unir

const objectocasa = {...mesa, ...silla}
console.log(objectocasa)







const nuevoProducto = {...producto, ...medidas}
console.log(nuevoProducto)