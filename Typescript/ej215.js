var alumnos = ["Nicolas", "Clara", "Manuel", "Alejandra"];
function mostrarAlumno(alumno) {
    console.log("ID: ".concat(alumno[0], " Alumno: ").concat(alumno[1]));
}
alumnos.forEach(function (nombre, indice) {
    mostrarAlumno([indice, nombre]);
});
