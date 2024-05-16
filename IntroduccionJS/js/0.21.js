// function Persona() {
//     this.edad = 0;
  
//     // Arrow function
//     setInterval(() => {
//       // En este contexto, this se refiere a la instancia de Persona.
//       this.edad++;
//     }, 1000);
//   }
  
//   const person = new Persona();



// Arrow functions  - es otra forma de declarar  funciones 

const suma2 = (num1, num2) => console.log(num1+num2);
suma2(5,10)

const aprendiendo = tecnologia => console.log(`Estoy aprendiendo: ${tecnologia}`)
aprendiendo('Javascript')

// -------------------------------------------------------------------------------------------------------------------------------------//



const meses =['enero','Febrer0', 'Marzo','abril','mayo'];

// arrays of abjects 
const carrito = [
    {nombre: 'monitor 20 pulgadas', precio: 500},
    {nombre: 'table de 18 pulgadas', precio: 160},
    {nombre: 'impresora Hp', precio: 420},
    {nombre: 'telefono lenovo', precio: 382},
    {nombre: 'equipo de audio', precio: 263},
    {nombre: 'consola de videojuego', precio: 372},
    {nombre: 'tablero', precio: 428},
    {nombre :'nevera', precio:289},
    {nombre :'Cocina',precio:289}
]



 meses.forEach( mes => {
     if(mes == 'Marzo'){
         console.log('marzo existe');
    }
 })



// some ideal para algunos arreglos

resultado = carrito.some(producto => producto.nombre === 'nevera'
)


// reduce
resultado = carrito.reduce((total, producto) =>  total + producto.precio, 0)  


// filter 
resultado = carrito.filter(producto=>  producto.precio > 400) 


resultado = carrito.filter(producto =>  producto.nombre !== 'monitor 20 pulgadas')
console.log(resultado)