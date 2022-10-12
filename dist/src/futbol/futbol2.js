"use strict";
class Equipo {
    constructor(nombre, apellido, edad, nacionalidad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
    }
    //() Metodos
    mostrarDatos() {
        console.log(`La persona ${this.nombre} ${this.apellido} de nacionalidad ${this.nacionalidad} tiene ${this.edad} años de edad`); //${}
    }
}
class JugadorReserva extends Equipo {
    constructor(nombre, apellido, edad, nacionalidad, puedePasarAPrimera) {
        super(nombre, apellido, edad, nacionalidad);
        this.puedePasarAPrimera = puedePasarAPrimera;
    }
}
class JugadorProfesional extends Equipo {
    constructor(nombre, apellido, edad, nacionalidad) {
        super(nombre, apellido, edad, nacionalidad);
    }
}
class DirectorTecnico extends Equipo {
    constructor(nombre, apellido, edad, nacionalidad) {
        super(nombre, apellido, edad, nacionalidad);
    }
}
class Presidente extends Equipo {
    constructor(nombre, apellido, edad, nacionalidad) {
        super(nombre, apellido, edad, nacionalidad);
    }
}
class CuerpoMedico extends Equipo {
    constructor(nombre, apellido, edad, nacionalidad, especialidad) {
        super(nombre, apellido, edad, nacionalidad);
        this.especialidad = especialidad;
    }
}
const jugadorProfesional = new JugadorProfesional('Lionel', 'Messi', 35, 'Argentina');
const directorTecnico = new DirectorTecnico('Lionel', 'Scaloni', 44, 'Argentina');
const presidente = new Presidente('Jose', 'Perez', 66, 'Uruguay');
const masajista = new CuerpoMedico('Luis', 'Suarez', 40, 'Uruguay', 'Masajista');
const kinesiologo = new CuerpoMedico('Raul', 'Sanchez', 40, 'Uruguay', 'Kinesiologo');
const jugadorReserva = new JugadorReserva('Juan', 'Perez', 16, 'Argentina', true);
jugadorProfesional.mostrarDatos();
directorTecnico.mostrarDatos();
presidente.mostrarDatos();
masajista.mostrarDatos();
kinesiologo.mostrarDatos();
//# sourceMappingURL=futbol2.js.map