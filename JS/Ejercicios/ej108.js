function ordenarNumeros(numero1, numero2, numero3, descendente = false) {
    let numeros = [numero1, numero2, numero3];
    
    if (descendente) {
        numeros.sort((a, b) => b - a);
    } else {
        numeros.sort((a, b) => a - b);
    }
    
    console.log(numeros.join(', '));
}

ordenarNumeros(10, 8, 25);

ordenarNumeros(10, 8, 25, true);