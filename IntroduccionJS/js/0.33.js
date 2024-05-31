
async function ObtenerEmpleados(){

    const url = 'js/empleados.json'

    fetch(url)
      .then(resultado =>{
        return resultado.json();
    })
    .then( datos =>{
     console.log(datos.Empleados)
     empleados.foreach( empleado =>{
        console.log(empleado.id)
        console.log(empleado.nombre)
        console.log(empleado.Puesto)
     })
  })

   const resultado = await fetch(archivo);
   const datos = await resultado.json();
   console.log(datos)
}

ObtenerEmpleados()