function obtenerPerimetroRectangulo(base, altura) {
    let perimetro;
    if (base === altura) {
        perimetro = 4 * base; 
    } else {
        perimetro = 2 * (base + altura);
    }

    console.log(`El perímetro es ${perimetro}`);

    if (perimetro > 100) {
        console.log("El perímetro es muy grande");
    } else {
        console.log("Este perímetro no es muy grande");
    }

    return perimetro;
}


// obtenerPerimetroRectangulo(10, 10);
// obtenerPerimetroRectangulo(20, 30);
// obtenerPerimetroRectangulo(50, 60);
obtenerPerimetroRectangulo(25, 25); 