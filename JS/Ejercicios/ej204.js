const persona = {
    nombre: 'Andres',
    apellido: 'Palacios',
    edad: 30,
    profesion: 'Desarrollador',
    saludar: function() {
        console.log(`Hola ${this.nombre} ${this.apellido}`);
    },
    obtenerEdad: function() {
        console.log(`Tengo ${this.edad} años`);
    },
    obtenerProfesion: function() {
        console.log(`Soy ${this.profesion}`);
    }
};

for (let propiedad in persona) {
    if (typeof persona[propiedad] === 'function') {
        persona[propiedad]();
    } else {
        console.log(`${propiedad}: ${persona[propiedad]}`);
    }
}