let tieneError = true;

function crearPromesa() {
    return new Promise((onSuccess, onError) => {
        if (tieneError) {
            onError('Hubo un error en la promesa');
        } else {
            onSuccess('La promesa se cumplió exitosamente');
        }
    });
}

let promesa = crearPromesa();

promesa
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });

tieneError = false;

promesa = crearPromesa();

promesa
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });