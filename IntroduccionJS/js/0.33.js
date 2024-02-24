
async function ObtenerEmpleados(){

    const archivo = 'js/empleados.json'

//     fetch(archivo)
//       .then(resultado =>{
//         return resultado.json();
//     })
//     .then( datos =>{
//      console.log(datos.Empleados)
//   })

   const resultado = await fetch(archivo);
   const datos = await resultado.json();
   console.log(datos)
}

ObtenerEmpleados()