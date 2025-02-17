function mostrarNumeros(numero) {
    if (numero > 10) return;
    console.log(numero);
    mostrarNumeros(numero + 1);
}

mostrarNumeros(0);

mostrarNumeros(4);