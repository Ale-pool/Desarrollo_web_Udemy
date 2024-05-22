// clases

class Producto {
  
    constructor(nombre,precio){
          this.nombre = nombre;
          this.precio = precio;
    }

    formatearProducto(){
        return `El producto con el nombre ${this.nombre} tiene un valor de ${this.precio}`
    }
    retonarprecio(){
       console.log(this.precio)
      }
}


// Herencia

class Libro extends Producto{
  
    constructor(nombre,precio,id){
      super(nombre,precio)
      this.id = id;
    }
    formatearProducto(){
         return `${super.formatearProducto()} y su ID corresponde a:${this.id}`
    }
    retonarprecio(){
       super.retonarprecio()
     }

}

const libro1 = new Libro ("La venganza de la rata",1200,993929329)
const producto1 = new Producto("monitor HD", 500);

// console.log(producto1);
// console.log(producto2);
// console.log(producto2.formatearProducto())
// console.log(producto1.retonarprecio())


class Motos{
  constructor(nombre,precio){
    this.precio = precio;
    this.nombre = nombre;
  }
  validarMoto(){
    console.log(`la moto con el nombre ${this.nombre} tiene un valor de ${this.precio}`)
  }
  Validarprecio(){
      console.log(this.precio)
  }
}

class Bicicletas extends Motos{
  constructor(nombre, precio){
    super(nombre,precio)
  }
}

const Moto1 = new Motos("FZ25-ABS", "$14.950.000")
const Moto2 = new Motos("YCZ", '6.600.000')

console.log(Moto2.validarMoto())

console.log(Moto1.Validarprecio())

