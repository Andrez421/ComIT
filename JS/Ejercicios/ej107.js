function numeroMasGrande (numero1, numero2) {

if (numero1 > numero2) {
    console.log(`El numero ${numero1} es mas grande que numero ${numero2} `); 
}
else if (numero1 < numero2) {
    console.log(`El numero ${numero2} es mas grande que numero ${numero1} `); 
}
else {
    console.log(`Los numeros son iguales`);
}

if(typeof numero1 !== "number" || typeof numero2 !== "number") {
    console.log("Por favor ingrese un numero valido");
    return;
}

}
numeroMasGrande (20, 20);