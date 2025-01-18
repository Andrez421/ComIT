const dia = 1;
let nombreDelDia = null;

// Switch
switch(dia){
    case 1:
        nombreDelDia = "Lunes";
        break;
    case 2:
        nombreDelDia = "Martes";
        break;
    case 3:
        nombreDelDia = "Miércoles";
        break;
    case 4:
        nombreDelDia = "Jueves";
        break;
    case 5:
        nombreDelDia = "Viernes";
        break;
    case 6:
        nombreDelDia = "Sábado";
        break;
    case 7:
        nombreDelDia = "Domingo";
        break;
    default:
        nombreDelDia = "Por favor seleccionar un número de 1 a 7";
}
console.log(nombreDelDia);

// If
const dia2 = 7;
let nombreDelDia2 = null;
if(dia2 === 1){
    nombreDelDia2 = "Lunes";
}else if(dia2 === 2){
    nombreDelDia2 = "Martes";
}else if(dia2 === 3){
    nombreDelDia2 = "Miércoles";
}else if(dia2 === 4){
    nombreDelDia2 = "Jueves";
}else if(dia2 === 5){
    nombreDelDia2 = "Viernes";
}else if(dia2 === 6){
    nombreDelDia2 = "Sábado";
}else if(dia2 === 7){
    nombreDelDia2 = "Domingo";
}else{
    nombreDelDia2 = "Por favor seleccionar un número de 1 a 7";
}
console.log(nombreDelDia2);


