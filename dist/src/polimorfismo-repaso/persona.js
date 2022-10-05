"use strict";
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.alturaCM = 0;
        this.pesoKG = 0;
    }
    pesoPromedio() {
        this.alturaCM = 50;
    }
    alturaPromedio() {
        this.pesoKG = 3;
    }
}
class Niño extends Persona {
    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
    }
    pesoPromedio() {
        this.alturaCM = 118;
    }
    alturaPromedio() {
        this.pesoKG = 28;
    }
}
class Adolescente extends Persona {
    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
    }
    pesoPromedio() {
        this.alturaCM = 155;
    }
    alturaPromedio() {
        this.pesoKG = 50;
    }
}
class Adulto extends Persona {
    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
    }
    pesoPromedio() {
        this.alturaCM = 180;
    }
    alturaPromedio() {
        this.pesoKG = 78;
    }
}
const niño = new Niño('Nahuel', 'Rosales', 8);
const adolescente = new Adolescente('Joaquín', 'Madiel', 14);
const adulto = new Adulto('Jorge', 'Alzagas', 29);
niño.alturaPromedio();
niño.pesoPromedio();
adolescente.alturaPromedio();
adolescente.pesoPromedio();
adulto.alturaPromedio();
adulto.pesoPromedio();
console.log(niño);
console.log(adolescente);
console.log(adulto);
//# sourceMappingURL=persona.js.map