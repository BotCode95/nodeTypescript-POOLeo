"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
class Vehiculo {
    constructor(id, marca, modelo, patente, km, valor) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.km = km;
        this.valor = valor;
    }
}
class Moto extends Vehiculo {
    constructor(id, marca, modelo, patente, km, valor, ruedas = 2) {
        super(id, marca, modelo, patente, km, valor);
        this.ruedas = ruedas;
    }
}
class Automovil extends Vehiculo {
    constructor(id, marca, modelo, patente, km, valor, ruedas = 4) {
        super(id, marca, modelo, patente, km, valor);
        this.ruedas = ruedas;
    }
}
class Camion extends Vehiculo {
    constructor(id, marca, modelo, patente, km, valor, ruedas) {
        super(id, marca, modelo, patente, km, valor);
        this.ruedas = ruedas;
    }
}
class RegistroAutomotor {
    constructor(listado = []) {
        this.listado = listado;
    }
    consultarListado() {
        return this.listado;
    }
    consultarAutomotor(id) {
        return this.listado.find(auto => auto.id === id);
    }
    borrarAutomotor(id) {
        return this.listado.filter(auto => auto.id !== id);
    }
    actualizarAutomotor(car) {
        const indexAuto = this.listado.findIndex(auto => (auto.id === car.id));
        this.listado[indexAuto] = car;
    }
    darDeAltaAutomotor(car) {
        return this.listado.push(car);
    }
}
exports.RegistroAutomotor = RegistroAutomotor;
//Instancia del Registro Automotor
const registro = new RegistroAutomotor();
//Instanciamos Autos 
const corollaRojo = new Vehiculo(0, 'Toyota', 'Corolla', 'AD566HN', 0, 6000000);
const etiosGris = new Vehiculo(1, 'Toyota', 'Etios', 'JKL990', 0, 5000000);
const tornadoHonda = new Vehiculo(2, 'Honda', 'Tornado 250cc', 'AA200DH', 0, 1200000);
//Registrar los autos
registro.darDeAltaAutomotor(corollaRojo);
registro.darDeAltaAutomotor(etiosGris);
// Consultar los autos
console.log(registro.consultarListado());
//const hiluxNegra = new Automovil(2,'Toyota',"Hilux", "AF466XS", 0, 11000000)
// // //Actualizar auto
//registro.actualizarAutomotor(hiluxNegra)
// //volver a consultar autos para ver el listado actualizado
//const listado = registro.consultarListado()
//console.log(registro.consultarListado())
// //consultar Auto especifico
//console.log(registro.consultarAutomotor(hiluxNegra.id))
// //borrar Auto
//console.log(registro.borrarAutomotor(hiluxNegra.id))
//# sourceMappingURL=herencia.js.map