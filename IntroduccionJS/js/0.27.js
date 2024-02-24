

// POO

// objects literal


const producto = {
    nombre: "Tv",
    precio: 100
}


// (Mas dinamico) Object constructor

function Alumno(nombre,apellido,edad){
   
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

Alumno.prototype.formatearalumno = function(){
    return `el alumno con el nombre ${nombre} tiene una edad de ${edad}`

}

function Profesor(nombre,edad,materia){
    this.nombre = nombre;
    this.edad = edad;
    this.materia = materia;
}

Profesor.prototype.formatearprofesor = function(){ // prototypes - son funciones que solo se utilizan en un objecto especifico
    return `el profesor con el nombre ${this.nombre} tiene una edad de ${this.edad}`
}

const profesor1 = new Profesor("marta",45,"ingles")
const  alumno1 = new Alumno("carlos","velez",19);
const alumno2  = new Alumno("Alex","villada",23);

console.log(alumno1)
console.log(alumno1.formatearalumno() );
console.log(alumno2.formatearalumno ());

 
