

// funciones que retornan valores


// function sumar(n1, n2){
//     return n1 + n2;
// }

// sumar();

// const resultado = sumar(2,3)

// console.log(resultado)


let total = 0;

function agregarcarrito(precio){
   return total += precio;
}
function calcularimpuesto(total){
      return 1.15 * total;
}

total = agregarcarrito(300)
total = agregarcarrito(300)
total = agregarcarrito(300)


console.log(total);

const totalapagar = calcularimpuesto(total);

console.log(`EL total a pagar con impuestos es de: ${totalapagar}`);