const usuario = { nombre: "Andres"};

function isUserValid() {
    if (usuario.nombre === "Andres") {
        console.log("Éxito: El nombre del usuario es correcto.");
    } else {
        console.log("Error: El nombre del usuario es incorrecto.");
    }
}

isUserValid();


