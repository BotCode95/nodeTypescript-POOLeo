"use strict";
class SeleccionFutbol {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}
class Jugador extends SeleccionFutbol {
    constructor(nombre, apellido, edad, equipo, numeroCamiseta) {
        super(nombre, apellido, edad);
        this.equipo = equipo;
        this.numeroCamiseta = numeroCamiseta;
    }
}
class Entrenador extends SeleccionFutbol {
    constructor(nombre, apellido, edad, nacionalidad) {
        super(nombre, apellido, edad);
        this.nacionalidad = nacionalidad;
    }
}
class Masajista extends SeleccionFutbol {
    constructor(nombre, apellido, edad, titulo, experiencia) {
        super(nombre, apellido, edad);
        this.titulo = titulo;
        this.experiencia = experiencia;
    }
}
const jugador1Seleccion = new Jugador("Lionel", "Messi", 35, 'PSG', 10);
console.log(jugador1Seleccion);
const masajistaSeleccion = new Masajista('Juan', 'Perez', 55, 'Masajista', 10);
console.log(masajistaSeleccion);
const entrenadorSeleccion = new Entrenador('Lionel', 'Scaloni', 44, 'Argentina');
console.log(entrenadorSeleccion);
//# sourceMappingURL=futbol.js.map