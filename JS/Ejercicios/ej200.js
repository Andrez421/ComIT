

const persona = {
    nombre: "Nicolas",
    saludar: function () {
        // En este contexto, 'this' hace referencia al objeto 'persona'
        console.log(this);
        // Aquí 'this.nombre' hace referencia a la propiedad 'nombre' del objeto 'persona'
        console.log(this.nombre);
    },
    saludar2: () => {
        // En una arrow function, 'this' no hace referencia al objeto 'persona'
        // sino que hereda el 'this' del contexto en el que fue definida
        console.log(this);
    },
};

// Llamadas a las funciones para ver el comportamiento de 'this'
persona.saludar(); // Debería imprimir el objeto 'persona' y luego "Nicolas"
persona.saludar2(); // Debería imprimir el 'this' del contexto global o del contexto en el que fue definida