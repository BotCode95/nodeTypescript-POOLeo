"use strict";
class SeleccionFutbol {
    constructor(id, nombre, apellido, edad) {
        this.id = id,
            this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}
class Jugador extends SeleccionFutbol {
    constructor(id, nombre, apellido, edad, equipo, numeroCamiseta) {
        super(id, nombre, apellido, edad);
        this.equipo = equipo;
        this.numeroCamiseta = numeroCamiseta;
    }
}
class Entrenador extends SeleccionFutbol {
    constructor(id, nombre, apellido, edad, nacionalidad) {
        super(id, nombre, apellido, edad);
        this.nacionalidad = nacionalidad;
    }
}
class Masajista extends SeleccionFutbol {
    constructor(id, nombre, apellido, edad, titulo, experiencia) {
        super(id, nombre, apellido, edad);
        this.titulo = titulo;
        this.experiencia = experiencia;
    }
}
const jugador1Seleccion = new Jugador(1, "Lionel", "Messi", 35, 'PSG', 10);
console.log(jugador1Seleccion);
const masajistaSeleccion = new Masajista(30, 'Juan', 'Perez', 55, 'Masajista', 10);
console.log(masajistaSeleccion);
const entrenadorSeleccion = new Entrenador(28, 'Lionel', 'Scaloni', 44, 'Argentina');
console.log(entrenadorSeleccion);
//# sourceMappingURL=futbol.js.map