function formatearPrecio (precio) {
    return precio.toLocaleString ("es-CO");         //para colocar puntos a los numeros
};


function esEmailValido (email) {
    if (email.includes ("@") && email.includes (".")) {         //aqui pregunta si el correo tiene arroba y si incluye punto (con el && debe cumplir las dos condiciones)
        return true;
    }
    else {
        return false;
    };
};

function calcularDescuento (precio, porcentaje) {
    let descuento = (precio * porcentaje) / 100;
    let precioFinal = precio - descuento;
    return precioFinal
};


module.exports = {
    formatearPrecio,
    esEmailValido,
    calcularDescuento, 
};
