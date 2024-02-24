
// Extructuras de control

/* 

Condicionales: 
if (condicion) {
  // código a ejecutar si la condición es verdadera
} else if (otraCondicion) {
  // código a ejecutar si la primera condición es falsa y esta es verdadera
} else {
  // código a ejecutar si ninguna de las condiciones anteriores es verdadera
}

switch:

switch (valor) {
  case valor1:
    // código a ejecutar si valor es igual a valor1
    break;
  case valor2:
    // código a ejecutar si valor es igual a valor2
    break;
  default:
    // código a ejecutar si ninguno de los casos anteriores coincide
}

. Bucles:

for (let i = 0; i < 5; i++) {
  // código a ejecutar en cada iteración
}

while (condicion) {
  // código a ejecutar mientras la condición sea verdadera
}

do {
  // código a ejecutar al menos una vez y luego repetir mientras la condición sea verdadera
} while (condicion);


array.forEach(function(elemento) {
  // código a ejecutar para cada elemento del array
});


Saltos de control:

break:
Se utiliza para salir de un bucle o de una estructura de control.

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Sale del bucle cuando i es igual a 5
  }
}

continue:
Se utiliza para saltar a la próxima iteración de un bucle.

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Salta a la próxima iteración cuando i es igual a 2
  }
  // Resto del código a ejecutar en cada iteración
}
*/

 /* Igual compración ==  -- diferentes !==*/


// const puntaje = 1000;

// if(puntaje == 1000){
//   console.log("Si el puntaje es el correcto")
// }else {
//    console.log("No es igual ")
// }



// const efectivo = 8000;
// const carrito = 7000;

// if(efectivo > carrito){
//   console.log("Puedes comprarlo");
// }else{
//   console.log("fondos insuficientes");
// }


const rol = "Programador";

if(rol == "Programador"){
    console.log("Puedes mirar y editar el codigo fuente");
}else if(rol == "Estudiante"){
   console.log("No puedes editar el codigo")
}else{
  console.log("NO tienes acceso al codigo fuente ")
}