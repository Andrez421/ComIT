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

let mutantesModificados = mutantes.map(mutante => {
    if (mutante === "Prof. Charles Francis Xavier" || 
        mutante === "James 'Logan' Howlett" || 
        mutante === "Jean Elaine Grey") {
        return `<3 ${mutante}`;
    }
    return mutante;
});

console.table(mutantes);
console.table(mutantesModificados);