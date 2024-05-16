
// switch 


const metodopago = "cheque"

switch(metodopago){
    case "Tarjeta":
        console.log("Ya pagaste con targeta");
        break;
    case "efectivo":
        console.log("pagaste con efectivo");
        break;
    case "cheque":
        console.log("pagaste con cheque")
        break;
    default:
        console.log("Aún no haz pagado")
}


// uso del swtich en diferentes objectos o funciones
const personajes = "avatar1";

switch(personaje){
    case "avatar1":
        console.log("Es el personaje principal");
        break;
    case "avatar2":
        console.log("Es el personaje secundario");
        break;
    case "avatar3":
        console.log("es el personaje de visita");
}