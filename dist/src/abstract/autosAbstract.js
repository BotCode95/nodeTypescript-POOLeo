"use strict";
class AutoM {
    constructor(nombreVehiculo) {
        this.nombreVehiculo = nombreVehiculo;
    }
}
class AutoCiudad extends AutoM {
    constructor(nombreVehiculo) {
        super(nombreVehiculo);
    }
    obtenerNombreVehiculo() {
        return this.nombreVehiculo;
    }
}
const autoCiudad = new AutoCiudad('Peugeot 208');
console.log(autoCiudad.obtenerNombreVehiculo());
//# sourceMappingURL=autosAbstract.js.map