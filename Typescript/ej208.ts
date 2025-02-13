function sumarNumeros(inicio: number, fin: number): string {
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }

    return `La suma de los números entre ${inicio} y ${fin} es: ${suma}`;
}

console.log(sumarNumeros(0, 10));
console.log(sumarNumeros(20, 30));
console.log(sumarNumeros(5, 50));


export default {};













