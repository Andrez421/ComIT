const contador = (function () {
    let acumulador = 0;

    return {
        increment: function () {
            acumulador += 1;
        },
        getCount: function () {
            console.log(acumulador);
        },
        decrement: function () {
            acumulador -= 1;
        },
        reset: function () {
            acumulador = 0;
        }
    };
})();

contador.increment(); 
contador.getCount(); 
contador.increment(); 
contador.getCount(); 

// Nuevo código
contador.decrement(); 
contador.getCount(); 
contador.reset(); 
contador.getCount(); 

// Si tratamos de acceder la variable acumulador desde afuera de la función IIFE, obtendremos un error porque acumulador es una variable privada y no está definida en el ámbito global.
console.log(acumulador); // Error: acumulador is not defined