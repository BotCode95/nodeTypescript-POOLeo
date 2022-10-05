"use strict";
class Animal {
    constructor(tipo, edad) {
        this.tipo = tipo;
        this.edad = edad;
        this.tipoComida = "";
    }
    comer() {
        this.tipoComida = "";
    }
}
class Felino extends Animal {
    constructor(tipo, edad) {
        super(tipo, edad);
    }
    comer() {
        this.tipoComida = 'carne';
    }
    rugir() {
        console.log('rugiendooo!');
    }
}
class Pez extends Animal {
    constructor(tipo, edad) {
        super(tipo, edad);
    }
    comer() {
        this.tipoComida = 'insectos';
    }
}
const felino = new Felino('León', 2);
felino.comer();
console.log(felino);
felino.rugir();
const pez = new Pez("Pejerrey", 0.3);
pez.comer();
console.log(pez);
//# sourceMappingURL=animal.js.map