const estadoProfesor = {
    nombre: "Nicolas",
    apellido: "Isnardi",
    amigos: ["Juan", "Pablo", "Char"],
    leGustaJavaScript: true,
};

const estadoAlumno = {
    nombre: "Andres",
    apellido: "Bravo",
    amigos: ["Harry", "Yesid", "Leo"],
};

const nuevoEstado = {
    ...estadoProfesor,
    ...estadoAlumno,
};

console.log(nuevoEstado);