"use strict";
class AutoM {
    constructor(modelo, marca) {
        this.modelo = modelo;
        this.marca = marca;
    }
}
class AutoCiudad extends AutoM {
    constructor(modelo, marca) {
        super(modelo, marca);
        this.velocidad = 0;
    }
    obtenerNombreVehiculo() {
        return `Modelo: ${this.modelo} de la Marca ${this.marca}`;
    }
    acelerar() {
        this.velocidad += 10;
    }
}
class AutoDeportivos extends AutoM {
    constructor(modelo, marca) {
        super(modelo, marca);
        this.velocidad = 0;
    }
    obtenerNombreVehiculo() {
        return `Modelo: ${this.modelo} de la Marca ${this.marca}`;
    }
    acelerar() {
        this.velocidad += 30;
    }
}
class Camioneta extends AutoM {
    constructor(modelo, marca) {
        super(modelo, marca);
        this.velocidad = 0;
    }
    obtenerNombreVehiculo() {
        return `Modelo: ${this.modelo} de la Marca ${this.marca}`;
    }
    acelerar() {
        this.velocidad += 20;
    }
}
const autoCiudad = new AutoCiudad('208', 'Peugeot');
const autoDeportivo2 = new AutoDeportivos('Supra', 'Toyota');
const camioneta = new Camioneta('Hilux', 'Toyota');
console.log(autoCiudad.obtenerNombreVehiculo());
console.log(autoDeportivo2.obtenerNombreVehiculo());
console.log(camioneta.obtenerNombreVehiculo());
//# sourceMappingURL=autosAbstract.js.map