// Importamos las dependencias
import {src, dest, watch} from 'gulp'; // importamos las funciones src y dest de gulp
import gulpSass from 'gulp-sass';  // esta es la depencencia para utilizar sass en un archivo gulp
import * as dartSass from 'sass'; // esta es la dependencia para utilizar sass en un archivo gulp el * es para traer todas las funciones de dartSass

// como le hacemos entender a gulp-sass que vamos a utilizar  las funciones de sass
const sass = gulpSass(dartSass);

export function css(done){
    src('./src/scss/app.scss') // buscamos el archivo scss
        .pipe(sass().on('error', sass.logError)) // le decimos que lo compile
        .pipe(dest('./dist/css')); // lo guardamos en la carpeta css
    
        done(); // terminamos la tarea
}

export function Dev(){
    watch('src/scss/**/*.scss', css)
}