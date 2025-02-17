const aritmetica = {
    suma: function(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            console.log(a + b);
        } else {
            console.log('Ambos parámetros deben ser números');
        }
    },
    resta: function(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            console.log(a - b);
        } else {
            console.log('Ambos parámetros deben ser números');
        }
    },
    multiplicar: function(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            console.log(a * b);
        } else {
            console.log('Ambos parámetros deben ser números');
        }
    },
    dividir: function(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            if (b !== 0) {
                console.log(a / b);
            } else {
                console.log('El divisor no puede ser cero');
            }
        } else {
            console.log('Ambos parámetros deben ser números');
        }
    },
    mostrarModulo: function(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            console.log(a % b);
        } else {
            console.log('Ambos parámetros deben ser números');
        }
    }
};

aritmetica.suma(2, 10);
aritmetica.resta(10, 5);
aritmetica.multiplicar(3, 100);
aritmetica.dividir(40, 2);
aritmetica.mostrarModulo(20, 2);