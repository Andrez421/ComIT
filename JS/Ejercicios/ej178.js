function cantidadDeCaracteres(texto) {
    if (typeof texto === 'string') {
        console.log(texto.length);
    } else {
        console.log(0);
    }
}

cantidadDeCaracteres("perro");
cantidadDeCaracteres("");
cantidadDeCaracteres(undefined);