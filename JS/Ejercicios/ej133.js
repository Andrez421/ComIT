let mutantes = [
    "Prof. Charles Francis Xavier",
    "Scott Summers",
    "Dr. Henry Philip 'Hank' McCoy",
    "Jean Elaine Grey",
    "Calvin Montgomery Rankin",
    "Kevin Sydney",
    // "Lorna Sally Dane",
    "Alexander Summers",
    "Suzanne Chan",
    "James 'Logan' Howlett",
    "Ororo Monroe"
    ];

if (mutantes.includes("Lorna Sally Dane")) {
    return;
} else {
    console.log("Lorna Sally Dane");
}

let mutantesString = "";
mutantes.forEach((mutante, index) => {
    mutantesString += mutante;
    if (index < mutantes.length - 1) {
        mutantesString += ", ";
    }
});

console.log(mutantesString);