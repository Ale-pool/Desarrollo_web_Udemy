
// como seleccionar contenido- las tres mas comunes son: queryselector - queryselectorAll - getelemetById

//  queryselector

const heading = document.querySelector('.header__texto h2') // 0 o 1 elementos
console.log(heading)

// queryselectorAll

const enlaces = document.querySelectorAll('.navegacion a')  // retorna a todos los que concuerde con el selector
enlaces[0].textContent = "Nuevo Texto para Enlace";
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace')


//  generar un nuevo enlace crear HTML con JS

const Nuevoenlace = document.createElement('A')



// generar un nuevo enlace

 Nuevoenlace.href = 'nuevo enlace'
// agregar el texto

 Nuevoenlace.textContent = 'Un nuevo enlace';

// agregar la clase

Nuevoenlace.classList.add('navegacion__enlace');


// agregarlo al documento


const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(Nuevoenlace);

console.log(Nuevoenlace);

// eventos

console.log(1)


window.addEventListener('load', function(){ // load espera a que el js y los archivos que depende del HTML esten listos
    console.log(2)
});

window.onload = function(){
    console.log(3)
}

document.addEventListener('DOMContentLoaded', function(){
     console.log(4)
})
console.log(5)  

window.onscroll = function(){
    console.log('scrolling...')
}

// cual es la diferencia entre Load y DOMContentLoaded - en el caso de Load espera a que se descargue todo el HTML,imagenes etc y el DOMContenLoad solo espera a que se descargue el HTML no espera Css o img

// seleccionar elementos y asociarles eventos

const btnenviar = document.querySelector('.boton--primario')
btnenviar.addEventListener('click', function(evento){
    console.log(evento)
    event.preventDefault()
    console.log('Enviando formulario');
})

