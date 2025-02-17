let gustosHelados = [];

gustosHelados.push('Brawnie');
gustosHelados.push('Ron con pasas');
gustosHelados.push('Frutos rojos');
gustosHelados.push('Vainilla');
gustosHelados.push('3 leches');
gustosHelados.push('Limón');
gustosHelados.push('Mandarina');
gustosHelados.push('Chocolate');
gustosHelados.push('Mora');
gustosHelados.push('Fresa');

function agregarGusto(gustos, nuevoGusto) {
    gustos.push(nuevoGusto); 
    return gustos;
}

let gustosReordenados = [];
for (let i = gustosHelados.length - 1; i >= 0; i--) {
    gustosReordenados = agregarGusto(gustosReordenados, gustosHelados[i]);
}

let gustosSinStock = gustosReordenados.splice(0, 2);

// console.log('Gustos disponibles:', gustosReordenados);
// console.log('Gustos sin stock:', gustosSinStock);

let gustosEliminados = gustosReordenados.splice(-2, 2);
gustosSinStock = gustosSinStock.concat(gustosEliminados);

console.log('Gustos disponibles:', gustosReordenados);
console.log('Gustos sin stock:', gustosSinStock);