function calcularPromedio(...numeros) {
    if (numeros.length === 0) return 0;
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    return suma / numeros.length;
}

console.log(calcularPromedio(10, 20, 30)); 
console.log(calcularPromedio(5, 15, 25, 35, 45)); 
console.log(calcularPromedio(100, 200)); 
console.log(calcularPromedio()); 