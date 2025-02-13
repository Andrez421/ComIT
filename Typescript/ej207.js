var notas;
notas = [6, 8, 7.5];
var notas2 = [8, 4, 8];
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, año, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }
    return Vehiculo;
}());
var vehiculo1 = new Vehiculo('Toyota', 'Rav4', 2024, 'Negro');
var vehiculo2 = new Vehiculo('Toyota', '4Runner', 2010, 'Gris');
var vehiculo3 = new Vehiculo('Honda', 'Pilot', 2020, 'Blanco');
var vehiculo4 = new Vehiculo('Honda', 'CR-V', 2015, 'Rojo');
console.log(vehiculo1);
console.log(vehiculo2);
console.log(vehiculo3);
console.log(vehiculo4);
