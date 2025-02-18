function crearPromesa(mensaje) {
    return new Promise((onSuccess) => {
        onSuccess(mensaje);
    });
}

const promesa = crearPromesa("Promesa exitosa!");

promesa.then((mensaje) => {
    console.log(mensaje);
});