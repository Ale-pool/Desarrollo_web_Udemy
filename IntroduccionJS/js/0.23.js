
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