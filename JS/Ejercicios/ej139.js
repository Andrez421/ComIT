const numeros = Array.from({ length: 100 }, (_, i) => i + 1);

const numerosPares = numeros.filter(num => num % 2 === 0);

const numerosImpares = numeros.filter(num => num % 2 !== 0);

console.log('Últimos 10 números pares:', numerosPares.slice(-10));
console.log('Últimos 10 números impares:', numerosImpares.slice(-10));