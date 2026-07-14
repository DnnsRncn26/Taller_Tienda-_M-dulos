const {formatearPrecio, calcularDescuento} = require ("./utilidades");     //esta diciendo vaya al archivo utilidades.js y traiga las funciones formatearPrecio y calcularDescuento

class Carrito {
    constructor (usuario) {
        this.usuario = usuario;
        this.items = [];                   //dentro de los corchetes no se coloca nada porque es una lista vacia, es un arreglo donde se guarda lo que se va agregando
    };


    agregar (producto, cantidad) {
        if (producto.hayStock (cantidad)=== true) {
            let canasta = {
                producto: producto,
                cantidad: cantidad,
            };
            this.items.push (canasta);         //aqui se guarda el objeto canasta que es de producto y cantidad
            return `Producto agregado`;
        }
        else {
            return `Sin stock`
        };
    };


    subtotal () {
        let total = 0;                                         //variable donde se guardara la suma total
        for (let d = 0; d < this.items.length; d++) {          // con este for recorro todos los elementos de items
            total = total + (this.items [d].producto.precio * this.items [d].cantidad);          //this.items [d].producto.precio   con ello tomo el precio del producto      y con   this.items [d].cantidad  tomo la cantidad
        };
        return total;
    };


    total (){
        let subtotal = this.subtotal();
        if (this.usuario.esVip === true) {        //pregunta si es VIP o no
            return calcularDescuento (subtotal, 10);
        }
        else {
            return subtotal;
        };
    };



    recibo () {
        let texto = `${this.usuario.saludo()}\n`;
        for (let d = 0; d < this.items.length; d++) {         // con este for recorro todos los elementos 
            texto += `${this.items [d].producto.nombre} - cantidad: ${this.items [d].cantidad} - precio ${formatearPrecio(this.items[d].producto.precio)}\n`;         //con este this.items [d].producto.nombre obtengo el nombre del producto
        };
        texto += `Total: ${formatearPrecio(this.total())}`;
        return texto;
    };
};


module.exports = Carrito; 