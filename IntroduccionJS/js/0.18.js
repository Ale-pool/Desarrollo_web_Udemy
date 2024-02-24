
// parametros y argumentos en una función
// parametros por default


function sumar(numero1, numero2){  // numero1 y numero2 son parametros 
    console.log(numero1 * numero2);
}
sumar(10,10) // argumentos o valores reales
// sumar(3,10)
// sumar(2,10)
// sumar(4,5)

const suma2 = function(num1, num2) {  // parametros 
    console.log(num1 + num2)
}
suma2(5,2)

// parametros por default


function sumar(numero1=0, numero2=0){  // numero1 y numero2 son parametros 
    console.log(numero1 * numero2);
}

sumar(2);