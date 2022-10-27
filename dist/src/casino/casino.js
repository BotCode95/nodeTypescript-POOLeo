"use strict";
class Tragamonedas {
    constructor(nombreDeJuego, probabilidadDeGanar, apuestas) {
        this.nombreDeJuego = nombreDeJuego;
        this.probabilidadDeGanar = probabilidadDeGanar;
        this.apuestas = apuestas;
        this.premioMaximo = 0;
        this.valorDeApuesta = 0;
        this.jugadorTiradas = [];
        this.cantidadDePosibilidades = 0;
    }
    getNombre() {
        return "El nombre del juego es: " + this.nombreDeJuego;
    }
    getProbabilidadDeGanar() {
        return this.probabilidadDeGanar;
    }
    getJugadorTiradas() {
        return this.jugadorTiradas;
    }
    setPremioMaximo(premioMaximo) {
        this.premioMaximo = premioMaximo;
    }
    setValorDeApuesta(dineroDisponible, valorDeApuesta) {
        const cantidadDePosibilidades = dineroDisponible / valorDeApuesta;
        this.valorDeApuesta = valorDeApuesta;
        this.cantidadDePosibilidades = cantidadDePosibilidades;
    }
    addJugadorTirada(tirada) {
        var _a;
        (_a = this.jugadorTiradas) === null || _a === void 0 ? void 0 : _a.push(tirada);
    }
}
//Juego 1
class Tragamonedas1 extends Tragamonedas {
    constructor(nombreDeJuego, probabilidadDeGanar, apuestas) {
        super(nombreDeJuego, probabilidadDeGanar, apuestas);
    }
}
// Juego 2
class Tragamonedas2 extends Tragamonedas {
    constructor(nombreDeJuego, probabilidadDeGanar, apuestas) {
        super(nombreDeJuego, probabilidadDeGanar, apuestas);
    }
}
//Creamos maquina 1
const tragamoneda1 = new Tragamonedas1('Juego de Dados', 5, [1, 2, 5, 10, 20, 50, 100]);
//Creamos maquina 2
const tragamoneda2 = new Tragamonedas2('Juego de Toros', 2, [50, 100, 500, 1000]);
//Preguntamos al jugador cuanto dinero pone y que tipo de apuesta
//100, 10 
tragamoneda1.setValorDeApuesta(100, 10);
console.log(tragamoneda1.getNombre());
//primer tirada
//si el jugador gano en la tirada no sumar premioMaximo  queda igual
//si gano el premio Maximo resetear el premioMaximo
function getRandomInt(valorMaximo) {
    return Math.floor(Math.random() * valorMaximo);
}
for (let i = 0; i < tragamoneda1.cantidadDePosibilidades; i++) {
    const numeroElegido = tragamoneda1.getProbabilidadDeGanar(); //5
    //   const numeroElegido =tragamoneda1.probabilidadDeGanar
    const numeroSorteado = getRandomInt(10);
    console.log('El numero elegido es: ' + numeroElegido);
    console.log('El numero sorteado es: ' + numeroSorteado);
    if (numeroElegido === numeroSorteado) {
        tragamoneda1.addJugadorTirada({
            perdio: 0,
            gano: 50,
            ganoPremioMaximo: false
        });
    }
    else {
        tragamoneda1.addJugadorTirada({
            perdio: 50,
            gano: 0,
            ganoPremioMaximo: false
        });
    }
}
tragamoneda1.getJugadorTiradas();
console.log(tragamoneda1.jugadorTiradas);
//# sourceMappingURL=casino.js.map