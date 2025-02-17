const alumnas = ['Cata', 'Mara', 'Daniela', 'Sofia', 'Sole'];

const alumnos = ['Andres', 'Sebastian', 'Johan', 'Santiago', 'Alejandro'];

const todos = alumnas.concat(alumnos);

console.log(alumnas[0]);
console.log(alumnas[1]);
console.log(alumnas[2]);
console.log(alumnas[3]);
console.log(alumnas[4]);

let i = 0;
while (i < alumnos.length) {
    console.log(alumnos[i]);
    i++;
}

for (let j = 0; j < todos.length; j++) {
    console.log(todos[j]);
}