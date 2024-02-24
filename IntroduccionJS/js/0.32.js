


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