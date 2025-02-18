function crearMultiplicador(factor) {
    return function(input) {
        return input * factor;
    };
}

let doble = crearMultiplicador(2);
console.log(doble(10)); 

let triple = crearMultiplicador(3);
console.log(triple(4)); 