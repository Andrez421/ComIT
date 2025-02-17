let numeros = [];

for (let i = 0; i <= 10000; i++) {
    numeros.push(i);
}

let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    //console.log(`Suma parcial hasta el índice ${i}: ${suma}`);
}

console.log(`Suma total: ${suma}`);

if (suma === 50005000) {
    console.log("El ejercicio es correcto");
} else {
    console.log("Verificar el ejercicio para obtener el resultado esperado!!!");
}