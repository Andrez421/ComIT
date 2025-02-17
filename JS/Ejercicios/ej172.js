function crearMultiplicador(numero1) {
    return function (numero2) {
        return numero1 * numero2;
    };
}

const multiplicador = crearMultiplicador(3);
const resultado = multiplicador(5);
console.log(resultado); 