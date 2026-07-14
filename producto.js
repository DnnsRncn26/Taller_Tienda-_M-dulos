class Producto {
    constructor (nombre, precio, categoria, stock) {          
    this.nombre = nombre;             //propiedades
    this.precio = precio;
    this.categoria = categoria;
    this.stock = stock;
    };

    hayStock (cantidad) {                  //metodo
        if (cantidad <= this.stock) {     //esto quiere decir que si la cantidad pedida es menor o igual a mi stock entonces da true, sino da false
            return true;
        }
        else {
            return false;
        };
        };

    ficha (){                          //metodo
        return `El nombre del producto es ${this.nombre}, pertenece a la categoria de ${this.categoria}, con un precio de ${this.precio}, y en el inventario quedan ${this.stock} unidades`
    };   
};

module.exports = Producto;          //esto es como prestar algo para que otro lo pueda usar




// if (unidadesDisponibles === true)


// return cantidad <= this.stock;