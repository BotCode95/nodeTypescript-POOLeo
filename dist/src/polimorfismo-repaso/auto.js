"use strict";
class Auto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadActual = 0;
    }
    acelerar() {
        this.velocidadActual += 10;
    }
}
class AutoDeportivo extends Auto {
    constructor(marca, modelo) {
        super(marca, modelo);
    }
    acelerar() {
        this.velocidadActual += 50;
    }
}
const auto = new Auto('Fiat', '500');
auto.acelerar();
const autoDeportivo = new AutoDeportivo('Toyota', 'Supra');
autoDeportivo.acelerar();
console.log(auto);
console.log(autoDeportivo);
//# sourceMappingURL=auto.js.map