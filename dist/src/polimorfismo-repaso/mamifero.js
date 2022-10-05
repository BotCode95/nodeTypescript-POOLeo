"use strict";
class Mamifero {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipoComida = "";
        this.velocidad = 0;
    }
    comer(tipoDeComida) {
        this.tipoComida = tipoDeComida;
    }
    correr() {
        this.velocidad = 10;
    }
}
class Herbivoro extends Mamifero {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    correr() {
        this.velocidad = 20;
    }
}
class Carnivoro extends Mamifero {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    correr() {
        this.velocidad = 60;
    }
}
class Omnivoro extends Mamifero {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    correr() {
        this.velocidad = 40;
    }
}
const tigre = new Carnivoro('tigre', 2);
const caballo = new Herbivoro('caballo', 5);
const oso = new Omnivoro('oso', 8);
tigre.comer('carne');
tigre.correr();
caballo.comer('hojas');
caballo.correr();
oso.comer('miel');
oso.correr();
console.log(tigre);
console.log(caballo);
console.log(oso);
//# sourceMappingURL=mamifero.js.map