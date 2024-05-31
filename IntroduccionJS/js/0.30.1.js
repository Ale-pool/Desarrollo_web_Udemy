// se quiere trabajar con las diferentes operaciones asincronas que se pueden hacer en js 

/** Primero que todo se empezara evaluando las devoluciones de llamadas o (callbacks) 
 * Las devoluciones de llamada son funciones que se ejecutan después de que se complete una operación asíncrona
*/


function Algoasincrono(callback){
    // simulacion de una solicitud de red que toma un tiempo
    setTimeout(function(){
          console.log('operacion asincrona completa');
        // Llmar al callback cuando la operacion asincrona se complete
        callback();
    },5000)
}

// uso de la funcion Algoasincrono con un callback

console.log("Comenzando la operacion asincrona");
Algoasincrono(function(){
    console.log("La operacion asincrona se ha completado");
});

console.log("Continuando con otras cosas");


/**
 * toma un callback como argumento y lo ejecuta después
 *  de completar la operación asíncrona
 *  (en este caso, simulada con setTimeout). Esto permite 
 * que el código continúe ejecutándose mientras se espera la 
 * finalización de la operación asíncrona.
 * 
 */


// promises 

/**
 * son un mecanismo para representar el resultado eventual de una operación
 *  asíncrona. Proporcionan una manera más estructurada y flexible 
 * de trabajar con código asíncrono en comparación con las 
 * devoluciones de llamada 
 * 
 * 
 * uedes crear una nueva promesa utilizando el constructor Promise. 
 * Este constructor toma una función con dos argumentos: resolve y reject.
 *  resolve se llama cuando la operación asíncrona se completa con éxito 
 * y reject se llama cuando la operación falla.
 */

const miPromesa = new Promise(function(resolve, reject){
    // simulacion de una operacion asincrona
    setTimeout(function(){
      resolve("Operacion completa");
      // rechazar se llama cuando la operacion falla
      // reject("Operacion fallida");
    },8000);
});

// async/await

/**es una característica introducida en ECMAScript 2017 
 * que simplifica aún más el manejo de operaciones asíncronas 
 * en JavaScript, haciéndolo más parecido a escribir código síncrono.
 *  Esta característica se basa en promesas y proporciona una sintaxis 
 * más clara y concisa para trabajar con código asíncrono.
 * 
 * async: Esta palabra clave se coloca antes de una función para indicar que
 *  la función devuelve una promesa. Las funciones marcadas como async siempre
 *  devuelven una promesa, incluso si no se retorna explícitamente una promesa 
 * en el cuerpo de la función.
await: Esta palabra clave se usa dentro de una función async 
para esperar que una promesa se resuelva. Permite pausar la ejecución de 
la función hasta que la promesa se resuelva y devolver el resultado.
 * 
 *  */

async function miFuncionAsincrona() {
  // Esperar a que la promesa se resuelva
  let resultado = await miPromesa;
  // El código aquí se ejecutará después de que la promesa se resuelva
  console.log(resultado);
}
