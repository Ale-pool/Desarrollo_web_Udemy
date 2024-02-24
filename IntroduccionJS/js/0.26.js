// this

const reservacion = {
   nombre : "Alex",
   apellido : "villada",
   total : 12000,
   pagado: false,
   informacion : function(){
     console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
   }

}


// window.nombre = "albin"
const reservacion2 = {
    nombre : "maria",
    apellido : "villa",
    total: 1000,
    informacion : ()=>{
        console.log(`la cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    } 
}

reservacion.informacion()
reservacion2.informacion()