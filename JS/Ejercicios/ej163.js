function saludar(mensaje, despedida) {
    console.log(mensaje);
    despedida();
}

function despedida() {
    console.log("Adiós!");
}

saludar("Bienvenidos a JavaScript", despedida);