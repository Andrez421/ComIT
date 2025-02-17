let mutantes = [
    "Prof. Charles Francis Xavier",
    "Scott Summers",
    "Dr. Henry Philip 'Hank' McCoy",
    "Jean Elaine Grey",
    "Calvin Montgomery Rankin",
    "Kevin Sydney",
    "Lorna Sally Dane",
    "Alexander Summers",
    "Suzanne Chan",
    "James 'Logan' Howlett",
    "Ororo Monroe"
];

let mutantesString = mutantes.reduce((acumulador, mutante, index) => {
    return acumulador + mutante + (index < mutantes.length - 1 ? ', ' : '');
}, '');

console.log(mutantesString);