let suma = 0;
for (let i = 0; i <= 1000; i++) {
    suma += i;
    if (i >= 100) {
        break;
    }
}
console.log(suma);