

class SeleccionFutbol {
    private nombre: string;
    private apellido: string;
    private edad: number;
    constructor(nombre: string, apellido: string, edad: number){
        this.nombre= nombre
        this.apellido = apellido
        this.edad = edad
    }
}


class Jugador extends SeleccionFutbol {
    private equipo: string;
    private numeroCamiseta: number;

    constructor(nombre: string, apellido: string, edad: number, equipo: string, numeroCamiseta: number){
        super(nombre,apellido,edad);
        this.equipo = equipo
        this.numeroCamiseta = numeroCamiseta
    }
}


class Entrenador extends SeleccionFutbol {
    private nacionalidad: string;

    constructor(nombre: string, apellido: string, edad: number, nacionalidad: string){
        super(nombre,apellido,edad);
        this.nacionalidad = nacionalidad
    }
}


class Masajista extends SeleccionFutbol {
    private titulo: string;
    private experiencia: number;


    constructor(nombre: string, apellido: string, edad: number, titulo: string, experiencia: number){
        super(nombre,apellido,edad);
        this.titulo = titulo
        this.experiencia = experiencia
    }
}


const jugador1Seleccion = new Jugador("Lionel", "Messi", 35, 'PSG',10)

console.log(jugador1Seleccion)
const masajistaSeleccion =  new Masajista('Juan', 'Perez', 55, 'Masajista', 10)
console.log(masajistaSeleccion)
const entrenadorSeleccion =  new Entrenador('Lionel', 'Scaloni', 44, 'Argentina')
console.log(entrenadorSeleccion)
