"use strict";
class AutoM {
    constructor(modelo, marca, precio, color, puertas = 4, caja_automatica = false, aire_acondicionado = false, asientos_cuero = false) {
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
        this.color = color;
        this.puertas = puertas;
        this.caja_automatica = caja_automatica;
        this.aire_acondicionado = aire_acondicionado;
        this.asientos_cuero = asientos_cuero;
    }
}
class AutoBuilder {
    constructor(modelo, marca, precio, color) {
        this.auto = new AutoM(modelo, marca, precio, color);
    }
    setAireAcondicionado(aire_acondicionado) {
        this.auto.aire_acondicionado = aire_acondicionado;
        return this;
    }
    setCajaAutomatica(caja_automatica) {
        this.auto.caja_automatica = caja_automatica;
        return this;
    }
    setNumeroPuertas(puertas) {
        this.auto.puertas = puertas;
        return this;
    }
    setAsientosCuero(asientos_cuero) {
        this.auto.asientos_cuero = asientos_cuero;
        return this;
    }
    getResultados() {
        return this.auto;
    }
}
const autoCiudad = new AutoBuilder('208', 'Peugeot', 5000000, 'gris').setAireAcondicionado(false).setAsientosCuero(true).setNumeroPuertas(4).setCajaAutomatica(true);
const autoCiudad1 = new AutoBuilder('408', 'Peugeot', 30000000, 'gris').setAireAcondicionado(true).setAsientosCuero(true).setNumeroPuertas(4);
const autoCiudad2 = new AutoBuilder('4008', 'Peugeot', 10000000, 'gris').setAireAcondicionado(true).setAsientosCuero(true).setNumeroPuertas(4);
const autoDeportivo2 = new AutoBuilder('Supra', 'Toyota', 12000000, 'rojo').setAireAcondicionado(true).setAsientosCuero(true).setNumeroPuertas(2).setCajaAutomatica(true);
const camioneta = new AutoBuilder('Hilux', 'Toyota', 11000000, 'Negro').setAireAcondicionado(true).setAsientosCuero(true).setNumeroPuertas(4);
console.log(autoCiudad.getResultados());
console.log(autoCiudad1.getResultados());
console.log(autoCiudad2.getResultados());
console.log(autoDeportivo2.getResultados());
console.log(camioneta.getResultados());
//# sourceMappingURL=autoBuilder.js.map