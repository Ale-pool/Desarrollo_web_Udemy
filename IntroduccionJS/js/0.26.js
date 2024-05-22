// this
// el arrow function hace referencia frente a la ventana global de la consola
// mientras que el fuction () hace referencia a la ventana local, es decir a las propiedades a las que se esta evaluadon la function
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
    nombre : "juliana",
    apellido : "olmedo",
    total: 1000,
    informacion : ()=>{
        console.log(`la cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    } 
}

reservacion.informacion()
reservacion2.informacion()