let mostrarNombre = function() {
    let nombre = "Sebastian";
    let longitud = nombre.length;
    let borde = "=".repeat(longitud + 4);
    let lineaNombre = `= ${nombre} =`;
    
    console.log(borde);
    console.log(lineaNombre);
    console.log(borde);
}
mostrarNombre();