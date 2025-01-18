let numeroDelMes = 12;
let nombreDelMes = null;
let cantidadDeDias = null;

if(numeroDelMes >= 1 && numeroDelMes <= 12) {
    switch (numeroDelMes) {
        case 1:
            nombreDelMes = 'Enero';
            cantidadDeDias = 31;
            break;
        case 2:
            nombreDelMes = 'Febrero';
            cantidadDeDias = 28;
            break;
        case 3:
            nombreDelMes = 'Marzo';
            cantidadDeDias = 31;
            break;
        case 4:
            nombreDelMes = 'Abril';
            cantidadDeDias = 30;
            break;
        case 5:
            nombreDelMes = 'Mayo';
            cantidadDeDias = 31;
            break;
        case 6:
            nombreDelMes = 'Junio';
            cantidadDeDias = 30;
            break;
        case 7:
            nombreDelMes = 'Julio';
            cantidadDeDias = 31;
            break;
        case 8:
            nombreDelMes = 'Agosto';
            cantidadDeDias = 31;
            break;
        case 9:
            nombreDelMes = 'Septiembre';
            cantidadDeDias = 30;
            break;
        case 10:
            nombreDelMes = 'Octubre';
            cantidadDeDias = 31;
            break;
        case 11:
            nombreDelMes = 'Noviembre';
            cantidadDeDias = 30;
            break;
        case 12:
            nombreDelMes = 'Diciembre';
            cantidadDeDias = 31;
            break;
                   
}console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} días.`);

}else {
    console.log('Ingrese un número entre 1 y 12.');
}