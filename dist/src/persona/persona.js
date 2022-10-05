"use strict";
class Personas {
    //constructor 
    constructor(nombre, apellido, edad, fechaNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fechaNacimiento = fechaNacimiento;
    }
    //metodos
    fullName() {
        return `El nombre completo de la persona es ${this.nombre} ${this.apellido}`;
    }
}
const persona1 = new Personas('Juan Jose', 'Alterd', 25, new Date('25/06/2000'));
console.log(persona1.fullName());
//# sourceMappingURL=persona.js.map