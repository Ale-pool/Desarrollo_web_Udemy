// POO
// objects literal
// const producto = {
//     nombre: "Tv",
//     precio: 100
// }


// // (Mas dinamico) Object constructor

// function marcadores(name, color) {
//       this.name = name;
//       this.color = color;
// }

// const marcador1 = new marcadores("marcador1", "rojo");
// console.log(marcador1)
// console.log(marcador1.color)


// function Alumno(nombre,apellido,edad){
   
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
// }

// Alumno.prototype.formatearalumno = function(){
//     return `el alumno con el nombre ${nombre} tiene una edad de ${edad}`

// }

// function Profesor(nombre,edad,materia){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.materia = materia;
// }

// Profesor.prototype.formatearprofesor = function(){ // prototypes - son funciones que solo se utilizan en un objecto especifico
//     return `el profesor con el nombre ${this.nombre} tiene una edad de ${this.edad}`
// }

// const profesor1 = new Profesor("marta",45,"ingles")
// const  alumno1 = new Alumno("carlos","velez",19);
// const alumno2  = new Alumno("Alex","villada",23);

// console.log(alumno2)
// console.log(alumno2.formatearalumno() );
// console.log(alumno1.formatearalumno ());


function cliente(nombre, apellido){
   this.nombre = nombre;
   this.apellido = apellido;
}
cliente.prototype.formateacliente = function () {
  return `el producto ${this.nombre} tiene un precio de ${this.apellido}`;
};


function Productos(nombre,precio ){
    this.nombre = nombre;
    this.precio = precio;
}


Productos.prototype.formatearproducto = function() {
  return `el producto ${this.nombre} tiene un precio de ${this.precio}`;
}

const producto2 = new productos("computadora",500);
const producto3 = new productos("tablet",700);

// creamos funciones que solo se utilizan en un objecto especifico

const cliente = new  client('alex', 'Villada');
console.log(cliente)
function formatearproducto(productos){
     return `el producto ${Productos.nombre} tiene un precio de ${Productos.precio}`
}
console.log(producto2)
console.log(producto3.precio)
console.log(formatearproducto(producto2));





/**Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan 
características entre sí */

/* Cada objeto en JavaScript tiene un prototipo asociado, que es esencialmente 
un objeto del cual hereda propiedades. Cuando intentas acceder a una propiedad de un 
objeto y esta no se encuentra en el propio objeto, JavaScript busca esa propiedad en el 
prototipo del objeto y en la cadena de prototipos hasta encontrarla o hasta llegar al final 
de la cadena. */

