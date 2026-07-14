const Producto = require ("./producto");
const Usuario = require ("./usuario");
const Carrito = require ("./carrito");
const {esEmailValido} = require ("./utilidades");

const usuario1 = new Usuario ("Andrea", "andrealopez@gmail.com", true);    //este true quiere decir que es vip     //creación del usuario

console.log (esEmailValido(usuario1.email));

 
const producto1 = new Producto ("jabon", 3000, "aseo", 7);           //creación de los productos
const producto2 = new Producto ("aceite", 10000, "cocina", 10);

const carrito1 = new Carrito (usuario1);     //creación del carrito



console.log (carrito1.agregar (producto1, 2));     //agrego los productos
console.log(carrito1.agregar (producto2, 20));   //compra que pide a propósito mas unidades de las que hay en el stock

console.log(carrito1.recibo());
