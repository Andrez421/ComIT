function esPar(numero) {
    return numero % 2 === 0;
}

const numeros = [2, 5, 3, 24, 12];

numeros.forEach(numero => {
    if (esPar(numero)) {
        console.log(`${numero} es par`);
    } else {
        console.log(`${numero} no es par`);
    }
});