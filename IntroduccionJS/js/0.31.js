


// Notification API

/*notificaciones de API
La Notification API de JavaScript permite a los desarrolladores web mostrar notificaciones en el sistema operativo
 del usuario.  Estas notificaciones pueden aparecer incluso cuando la página web no está activa, 
 proporcionando una manera efectiva de atraer la atención del usuario.*/




const boton = document.querySelector('#boton');
boton.addEventListener('click', function(){
    Notification.requestPermission()
    .then((resultado)=>{
        console.log(`el resultado es ${resultado}`)
    })
})

if(Notification.permission = 'granted'){
   new Notification('Esta es una notificación',{
    
   })
}

const noti = document.querySelector('#boton2');
noti.addEventListener('click', function(){
   Notification.requestPermission()
   .then((resultado)=>{
       console.log(`el resultado es ${resultado}`)
   })
})

if(Notification.permission = 'granted'){
    new Notification('Esta es una notificación',{
        
    })
}

