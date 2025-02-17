const gastos = [
    { descripcion: 'Hotel', monto: 100 },
    { descripcion: 'Viaje', monto: 1000 },
    { descripcion: 'Comida', monto: 200 }
];

const totalGastos = gastos.reduce((total, gasto) => total + gasto.monto, 0);

console.log(`Vamos a gastar en el viaje: ${totalGastos} devaluados pesos`);