function dividir(numero1, numero2) {
    if (numero2 === 0) {
        throw new Error("No se puede dividir por 0");
    }
    return numero1 / numero2;
}

try {
    console.log(dividir(10, 0));
} catch (error) {
    console.log(error.message);
}



// function dividir(numero1, numero2) {
//     if (numero2 === 0) {
//         console.log("No se puede dividir por 0");
//     }
//     return numero1 / numero2;
// }

// console.log (dividir(10, 0));
// console.log (dividir(10, 2));

