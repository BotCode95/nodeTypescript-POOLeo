"use strict";
class Televisor {
    constructor(volumenInicial, canalInicial) {
        this.estaPrendido = false;
        this.volumenActual = volumenInicial;
        this.canalActual = canalInicial;
    }
    prenderApagar() {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else
            this.estaPrendido = true;
    }
    subirVolumen() {
        this.volumenActual = this.volumenActual + 1;
    }
    bajarVolumen() {
        this.volumenActual = this.volumenActual - 1;
    }
    subirCanal() {
        this.canalActual = this.canalActual + 1;
    }
    bajarCanal() {
        this.canalActual = this.canalActual - 1;
    }
    elegirCanal(canal) {
        this.canalActual = canal;
    }
}
//# sourceMappingURL=televisor.js.map