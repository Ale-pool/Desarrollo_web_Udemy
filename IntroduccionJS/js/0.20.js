

// crear mi propio metodos = metodos de propiedad 

const reproductor = {
    reproducir : function(id){
        console.log(`reproduciendo cancion con el ID ${id}`);
    },
    pausar : function(){
        console.log('Pausando tu canción....');
    },
    crearplaylist : function(nombre){
          console.log(`Creando la playlist ${nombre}`);
    }
}

reproductor.borrarcancion = function(id){
 console.log(`Borrando la cancion con el ID: ${id}`)
}

reproductor.reproducir(5000);
reproductor.pausar();
reproductor.crearplaylist('Musica clasica');
reproductor.borrarcancion(100); 