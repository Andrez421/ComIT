type Alumno = [number, string];

const alumnos: string[] = ["Nicolas", "Clara", "Manuel", "Alejandra"];

function mostrarAlumno(alumno: Alumno): void {
    console.log(`ID: ${alumno[0]} Alumno: ${alumno[1]}`);
}

alumnos.forEach((nombre, indice) => {
    mostrarAlumno([indice, nombre]);
});

export default {};
