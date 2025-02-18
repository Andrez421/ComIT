const animales = ['perro', 'gato', 'delfin', 'elefante'];

const animalesMayusculas = animales.map(animal => animal.toUpperCase());

console.log('Animales:');
animalesMayusculas.forEach(animal => console.log(`- ${animal}`));