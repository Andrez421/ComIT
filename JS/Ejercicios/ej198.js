class Vehiculo {
    constructor(marca, modelo, cantidadDePuertas, anio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.cantidadDePuertas = cantidadDePuertas;
        this.anio = anio;
        this.color = color;
    }

    toString() {
        console.log(`${this.marca} ${this.modelo} ${this.anio}`);
    }

    getColor() {
        return this.color;
    }
}

const vehiculo1 = new Vehiculo("Toyota", "Rav4", 4, 2024, "Black");
const vehiculo2 = new Vehiculo("Honda", "Pilot", 4, 2025, "Dark Blue");

vehiculo1.toString();
console.log(vehiculo1.getColor());

vehiculo2.toString();
console.log(vehiculo2.getColor());