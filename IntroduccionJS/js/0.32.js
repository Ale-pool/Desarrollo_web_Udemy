
function descargarNuevosclientes(){
       return new Promise( resolve  =>{
        console.log('Descargando clientes ...... espere'); 

        setTimeout(()=>{
            resolve('Los clientes fueron descargados')
        },5000)
       })

    
}
function descargarUltimosPedidos(){
    return new Promise( resolve  =>{
     console.log('Descargando pedidos ...... espere'); 

     setTimeout(()=>{
         resolve('Los pedidos  fueron descargados')
     },5000)
    })

 
}

// async - await
async function app(){
    try {
        const resultado = await Promise.all([descargarNuevosclientes(), descargarUltimosPedidos()]);
        console.log(resultado[0])
        console.log(resultado[1])
    } catch (error) {
        console.log(error)
    }
}

app()

 // const clientes = await descargarNuevosclientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes)
        // console.log(pedidos)



function Estudiantes (){
    return new Promise((resolve)=>{
      console.log('cargando estudiantes....');
    setTimeout(()=>{
        resolve('estudiantes cargados')
    },6000)
    })
}


function Profesores(){
    return new Promise((resolve)=>{
        console.log('cargando profesores....');
        setTimeout(()=>{
            resolve('Profesores cargados')
        },6000)
    })
}


  async function school(){
    try{
        const resultado = await Promise.all([Estudiantes(), Profesores()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    }catch(error){
           console.log(error)
    }
 }


school()