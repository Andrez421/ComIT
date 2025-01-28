const persona = {
    nombre: 'Andres',
    apellido: 'Palacios',
    edad: 30,
    dni: 123456789,
    peso: 80,
};
persona.talla = 1.80;
persona.empleado = true;
persona.casado = false;
persona.masctoas = ['perro', 'gato'];
persona.esposa = {};
persona.esposa.nombre = 'Ana';
persona.esposa.edad = 24;
persona.esposa.dni = 1088974756;
persona.esposa.peso = 60;
persona.esposa.talla = 1.60;
persona.esposa.empleado = true; 
persona.masctoas.push('loro');

console.log(persona);
