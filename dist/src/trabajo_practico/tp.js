"use strict";
class Alumnoo {
    constructor(nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
        this.examenRendidos = [];
    }
    //get === obtener devuelve valor 
    getNombre() {
        return this.nombre;
    }
    getDNI() {
        return this.dni;
    }
    rendirExamen(examen, respuestas) {
        //TODO: Revisar
        if (examen.equals(respuestas)) {
            return true;
        }
        else {
            return false;
        }
    }
}
class RendicionDeExamen {
    constructor(examen, respuestas) {
        this.examen = examen;
        this.respuestas = respuestas;
    }
    getExamen() {
        return this.examen;
    }
    estaAprobado() {
        if (this.examen.puntajeAprobacion >= 7) {
            return true;
        }
        else {
            return false;
        }
    }
}
class Pregunta {
    constructor(consigna, puntaje) {
        //this.consigna (hace referencia a la propiedad declarada antes del constructor en la clase)
        this.consigna = consigna;
        this.puntaje = puntaje;
        this.opciones = [];
        this.opcionCorrecta = 0;
    }
    addOpcion(opcion) {
        this.opciones.push(opcion);
    }
    //set = establecer no devuelve dato solo cambia valores
    setOpcionCorrecta(opcionCorrecta) {
        this.opcionCorrecta = opcionCorrecta;
    }
    esCorrecta(respuesta) {
        if (respuesta === this.opcionCorrecta) {
            return true;
        }
        else {
            return false;
        }
    }
    getPuntaje() {
        console.log("Puntaje de la pregunta", this.puntaje);
        return this.puntaje;
    }
}
class Examen {
    constructor(tema, puntajeAprobacion) {
        this.tema = tema;
        this.puntajeAprobacion = puntajeAprobacion;
        this.preguntas = [];
    }
    //add = agregar 
    addPregunta(pregunta) {
        //agregar la pregunta en el array de preguntas
        this.preguntas.push(pregunta);
    }
    //equals === igual 
    equals(o) {
        return this.preguntas.some(pregunta => pregunta === o);
    }
    getTema() {
        console.log("Nombre del tema del examen", this.tema);
        return this.tema;
    }
}
class ExamenEspecial extends Examen {
    constructor(tema, puntajeAprobacion, penalizacion) {
        super(tema, puntajeAprobacion);
        this.penalizacionRespuestaIncorrecta = penalizacion;
    }
    addPregunta(pregunta) {
        this.preguntas.push(pregunta);
    }
    getPenalizacionRespuestaIncorrecta() {
        return this.penalizacionRespuestaIncorrecta;
    }
}
const alumnoPrimero = new Alumnoo('Juan Perez', 40432122);
const examenCultura = new Examen('cultura general', 10);
const rendicionExamen = new RendicionDeExamen(examenCultura, [1, 2, 3, 4]);
const pregunta1 = new Pregunta('en que año estamos', 2);
const pregunta2 = new Pregunta('que año fue el anterior', 2);
const pregunta3 = new Pregunta('que añó es el siguiente', 2);
const pregunta4 = new Pregunta('cuando se juega el proximo mundial', 2);
const pregunta5 = new Pregunta('en que año empezo la pandemia', 2);
const examenEspecial = new ExamenEspecial('examenSorpresa', 10, 2);
//Alumno
alumnoPrimero.rendirExamen(examenCultura, [1, 2, 3, 4]);
//examen = agregar preguntas
examenCultura.addPregunta(pregunta1);
examenCultura.addPregunta(pregunta2);
examenCultura.addPregunta(pregunta3);
examenCultura.addPregunta(pregunta4);
examenCultura.addPregunta(pregunta5);
examenCultura.getTema();
//Preguntas
pregunta1.getPuntaje();
//Rendicion Examen
rendicionExamen.estaAprobado();
rendicionExamen.getExamen();
rendicionExamen.getExamen();
//# sourceMappingURL=tp.js.map