




// function carros (color, precio, cilindros){
//   this.color = color;
//   this.precio = precio;
//   this.cilindros = cilindros;
// }

// const carro1 = new carros("rojo",200,4);
// const carro2 = new carros("azul",300,6);

// function moto(color, cilindros){
//   this.color = color;
//   this.cilindros = cilindros;
// }

// const moto1 = new moto("rojo",4);
// const moto2 = new moto("azul",6);

// carros.prototype.validarcarro = function(){
//   return `el carro ${this.color} tiene ${this.cilindros} cilindros`
// }

// console.log(carro2.validarcarro());


// function Animal(nombre) {
//   this.nombre = nombre;
// }

// Animal.prototype.saludar = function() {
//   console.log(`Hola, soy ${this.nombre}.`);
// };

// // Subclase
// function Perro(nombre, raza) {
//   // Llamar al constructor de la superclase
//   Animal.call(this, nombre);

//   // Propiedad específica de la subclase
//   this.raza = raza;
// }

// // Establecer la herencia
// Perro.prototype = Object.create(Animal.prototype);

// // Agregar método específico de la subclase
// Perro.prototype.ladrar = function() {
//   console.log('¡Guau, guau!');
// };

// // Crear instancias
// const miPerro = new Perro('Buddy', 'Labrador');
// miPerro.saludar(); // Imprime: Hola, soy Buddy.
// miPerro.ladrar();  // Imprime: ¡Guau, guau!


// class Animal2 {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }

//   saludar(){
//     console.log(`Hola soy ${this.nombre}` )
//   }
// }

// // clase derivada

// class Gato extends Animal2{
//   constructor(nombre,tipo){
//     super(nombre);
//     this.tipo = tipo;
//   }
//   maullar(){
//     console.log('Miau, miau, miau');
//   }
// }

// // creando instancias

// const migato = new Gato('pelos','siames');
// migato.saludar();
// migato.maullar();
