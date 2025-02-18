function crearPromesa(delay, tieneError = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tieneError) {
                reject('Pasaron ' + delay + ' segundos y la promesa no fue exitosa');
            } else {
                resolve('Pasaron ' + delay + ' segundos y la promesa fue exitosa');
            }
        }, delay * 1000);
    });
}

let promesa1 = crearPromesa(5);
promesa1.then((message) => console.log(message)).catch((error) => console.log(error));

let promesa2 = crearPromesa(1);
promesa2.then((message) => console.log(message)).catch((error) => console.log(error));

let promesa3 = crearPromesa(10);
promesa3.then((message) => console.log(message)).catch((error) => console.log(error));

let promesa4 = crearPromesa(3, true);
promesa4.then((message) => console.log(message)).catch((error) => console.log(error));