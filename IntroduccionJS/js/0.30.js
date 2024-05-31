// promises


/** La promesas se entienden como una manera de manejar operaciones 
 * asincronicas, una promesa representa un valor que puede estar 
 * disponible ahora, en el futuro o nunca. Las promesas mejoran 
 * el manejo de la asincronía en comparación con los callbacks, proporcionando un flujo de control más limpio y manejable.
 */

const usuarioAutenticado = new Promise( (resolve, reject)=>{
   const uath = true;
   if(uath){
       resolve('usuario autenticado')
   }else {
       reject('no se ha podido autenticar')
   }
})

usuarioAutenticado
.then((resultado) => console.log(resultado)
)
.catch((error)=> console.log(error))



let miPromesa = new Promise((resolve, reject) => {
  // Simula una operación asíncrona
  setTimeout(() => {
    let exito = false; // Cambia a false para ver el manejo de errores
    if (exito) {
      resolve('Operación completada con éxito');
    } else {
      reject('Operación fallida');
    }
  }, 2000); // Simula una espera de 2 segundos
});


// consumir una promesa 

miPromesa
  .then((resultado) => {
    console.log(resultado); // Se ejecuta si la promesa se resuelve
  })
  .catch((error) => {
    console.error(error); // Se ejecuta si la promesa se rechaza
  });


// en los promises existen 3 estados de manejo de promises

// pending: No se ha cumplido pero tampoco se ha rechazado
// resolve ( fullfilled) : ya se cumplio 
// reject ( rejected) : ya se rechazo o no se cumplio la promesa 
