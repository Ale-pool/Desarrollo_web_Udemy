

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


// if -- como condicional


const edad = 19;

if (edad >= 18) {
  console.log("eres mayor de edad");
}else {
  console.log("eres menor de edad");
}

// elif

nota = 4

if (nota == 5){
  console.log("muy bien")
} else if (nota === 4 || nota === 3){
  console.log("bien")
}else {
  console.log("mal, tienes que mejorar")
}


const tienePermiso = false;
const tienePase = true;

if (tienePermiso || tienePase) {
  console.log('Acceso permitido.');
} else {
  console.log('Acceso denegado.');
}



const edad2 = 16;
const tienePermisoPadres = false;
tieneLicencia = true;

if ((edad2 >= 18 && tieneLicencia) || (edad2 < 18 && tienePermisoPadres)) {
  console.log('Puedes conducir.');
} else {
  console.log('No puedes conducir.');
}
// ========================================


const rol = "Programador";

if(rol == "Programador"){
    console.log("Puedes mirar y editar el codigo fuente");
}else if(rol == "Estudiante"){
   console.log("No puedes editar el codigo")
}else{
  console.log("NO tienes acceso al codigo fuente ")
}


const rol2 = "admin";

if(rol2 == "admin"){
  console.log("Tienes acceso a la base de datos");
}else if (rol2 == "Programador"){
  console.log("Falta permisos");
}else {
  console.log("Acceso denegado Totalmemte");
}

// ========================================


// Blucle for

const num = 30;
const numvalor = parseInt(num);

for (let i = 0; i < numvalor; i++) {
  console.log(i);
}
