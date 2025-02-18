function saludar() {
  // Aquí, `this` hace referencia al objeto global
  console.log(this);
}

saludar(); // Llama a la función `saludar` en el contexto global, `this` será el objeto global.

function saludar(nombre) {

}

const persona = { nombre: 'Andres' };

// `call` invoca la función `saludar` con `this` apuntando al objeto `persona` y pasa 'Andres' como argumento.
saludar.call(persona, 'Andres'); 

// `apply` invoca la función `saludar` con `this` apuntando al objeto `persona` y pasa ['Andres'] como argumentos.
saludar.apply(persona, ['Andres']); 

// `bind` crea una nueva función `saludarPersona` con `this` apuntando al objeto `persona`.
const saludarPersona = saludar.bind(persona);

