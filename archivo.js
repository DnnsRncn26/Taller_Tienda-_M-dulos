class Usuario {
    constructor (nombre, email, esVip) {
    this.nombre = nombre;           //propiedades
    this.email = email;
    this.esVip = esVip;
    };

    saludo () {                  //metodo
        return `Hola, estimado (a) ${this.nombre}, bienvenido a nuestra tienda`
    };
};

module.exports = Usuario;          //esto es como prestar algo para que otro lo pueda usar
