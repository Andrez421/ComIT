let mensaje = '3.14 es un gran número, pero mejor es 42 que le da significado a la vida'
let pi = mensaje.substr(0,4) 
pi = parseFloat(pi);

let significadoDeLaVida = mensaje.substr(38, 2);
significadoDeLaVida = parseInt(significadoDeLaVida);

let resultado = pi + significadoDeLaVida;
console.log(`El resultado de sumar las variables ${pi} + ${significadoDeLaVida} es: ${resultado.toString()}`);