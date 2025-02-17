function mostrarNumeros(inicio, fin) {
    inicio = Number(inicio);
    fin = Number(fin);

    if (isNaN(inicio) || isNaN(fin)) {
        console.log("Ambos parámetros deben ser números.");
        return;
    }

    if (inicio === fin) {
        console.log("Los números son iguales:", inicio);
        return;
    }

    if (inicio < fin) {
        for (let i = inicio; i <= fin; i++) {
            console.log(i);
        }
    } else {
        for (let i = inicio; i >= fin; i--) {
            console.log(i);
        }
    }
}

// mostrarNumeros(0, 1000);
// mostrarNumeros(1000, 0);
// mostrarNumeros(100, 100);
mostrarNumeros("100", 300);