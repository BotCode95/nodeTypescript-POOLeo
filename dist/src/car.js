"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fiat = exports.Toyota = exports.Matriz = exports.RegistroAutomotor = exports.Car = void 0;
class Car {
    constructor(id = 1, nombre, color, anio, combustible) {
        this.contador = 0;
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.anio = anio;
        this._combustible = combustible;
    }
    arrancar() {
        console.log('inicia su recorrido');
    }
    acelerar() {
        this.sumarContador();
        this._combustible--;
        console.log(`acelera : ${this.contador}`);
    }
    frenar() {
        console.log(`termina su recorrido, llevo un tiempo de ${this.contador}`);
        clearInterval;
    }
    sumarContador() {
        this.contador++;
        return this.contador;
    }
    get combustible() {
        return this._combustible;
    }
}
exports.Car = Car;
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
class Matriz {
    get ConsultarDatos() {
        return listado;
    }
}
exports.Matriz = Matriz;
class Toyota extends Car {
    CuatroXCuatro() {
        return 'el vehiculo es 4x4';
    }
}
exports.Toyota = Toyota;
class Fiat extends Car {
}
exports.Fiat = Fiat;
//Instancia del Registro Automotor
const registro = new RegistroAutomotor();
//Instanciamos Autos 
const corollaRojo = new Toyota(0, 'Corolla', 'Rojo', 2020, 20);
const etiosGris = new Toyota(1, 'Etios', 'Gris', 2018, 20);
//Registrar los autos
registro.darDeAltaAutomotor(corollaRojo);
registro.darDeAltaAutomotor(etiosGris);
//Consultar los autos
console.log(registro.consultarListado());
const hiluxNegra = new Toyota(1, 'Hilux', 'Negro', 2018, 20);
//Actualizar auto
registro.actualizarAutomotor(hiluxNegra);
//volver a consultar autos para ver el listado actualizado
const listado = registro.consultarListado();
console.log(registro.consultarListado());
//consultar Auto especifico
console.log(registro.consultarAutomotor(hiluxNegra.id));
//borrar Auto
console.log(registro.borrarAutomotor(hiluxNegra.id));
//Instancia de matriz
const matriz = new Matriz();
//Consulta del listado con el metodo get
console.log(matriz.ConsultarDatos);
//# sourceMappingURL=car.js.map