function crearPromesa(mensaje) {
    return new Promise((onSuccess) => {
        setTimeout(() => {
            onSuccess(mensaje);
        }, 5000);
    });
}

async function mostrarPromesa(mensaje) {
    const resultado = await crearPromesa(mensaje);
    console.log(resultado);
}

mostrarPromesa("Wow, estamos usando async / await");
