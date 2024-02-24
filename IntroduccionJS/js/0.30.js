

const UsuarioAutenticado = new Promise((resolve, reject)=>{

 const valor= true;

 if(valor){
   resolve('Usuario Autenticado')
 }else{
   reject('No se pudo acceder con exito')
 }

})
 
UsuarioAutenticado
.then( resultado=> console.log('resultado')) 
.catch( error=> console.log('error'))
