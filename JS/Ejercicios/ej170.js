// Definimos una función llamada 'contar'
function contar() {
    // Declaramos una variable 'contador' y la inicializamos en 0
    let contador = 0;

    // Retornamos una función sin definir su nombre
    return function () {
        // Incrementamos el valor de 'contador' en 1
        contador++;
        // Imprimimos el valor actual de 'contador' en la consola
        console.log(contador);
    };
}
  // Llama a la función 'contar' y asigna su valor de retorno a la variable 'incrementar'
  const incrementar = contar();
  incrementar();
  incrementar();
  incrementar();
  incrementar();
