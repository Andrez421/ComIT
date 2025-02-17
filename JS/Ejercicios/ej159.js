let propiedad1 = 'nombre';

let propiedad2 = 'edad';

let persona = {
    nombre: '',
    edad: 0
};

persona.nombre = 'Andres';
persona.edad = 30;

console.log(persona['nombre']);
console.log(persona['edad']);

console.log(persona[propiedad1]);
console.log(persona[propiedad2]);