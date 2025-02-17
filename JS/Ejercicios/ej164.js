const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forEach(collection, callback) {
    for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
    }
}

forEach(numeros, function(numero) {
    console.log(numero);
});