let suma = 0;
let count = 0;

for (let i = 0; i <= 10000; i++) {
    if (i % 2 === 0) {
        suma += i;
        count++;
        if (count === 10) {
            break;
        }
    }
}
console.log(suma);