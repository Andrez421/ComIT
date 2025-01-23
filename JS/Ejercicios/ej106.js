function obtenerIdUsuario() {
    return 30;
}
function usuarioValido() {
    return obtenerIdUsuario() > 30;
}
if (usuarioValido()) {
    console.log("EL usuario es válido");
} else {
    console.log("EL usuario no es válido");
}