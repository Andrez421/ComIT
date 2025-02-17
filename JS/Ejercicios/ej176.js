// Ejemplo 1
// Resultado: undefined
console.log(numero1);
var numero1 = 10;

// Ejemplo 2
// Resultado: "Hola Mundo!"
saludar();

function saludar() {
    console.log("Hola Mundo!");
}

// Ejemplo 3
// Resultado: ReferenceError: Cannot access 'numero2' before initialization
// console.log(numero2);
// let numero2 = 20;

// Ejemplo 4
// Resultado: undefined, 5
function prueba() {
    console.log(numero3);
    var numero3 = 5;
    console.log(numero3);
}

prueba();

// Ejemplo 5
// Resultado: TypeError: saludar is not a function
// saludar();

// var saludar = function () {
//   console.log("Hola Mundo!");
// };

// Ejemplo 6
// Resultado: ReferenceError: Cannot access 'numero4' before initialization
// {
//   console.log(numero4);
//   let numero4 = 15;
// }