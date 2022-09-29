

class SeleccionFutbol {
    private id: number;
    private nombre: string;
    private apellido: string;
    private edad: number;
    constructor(id: number,nombre: string, apellido: string, edad: number){
        this.id = id,
        this.nombre= nombre
        this.apellido = apellido
        this.edad = edad
    }
}


class Jugador extends SeleccionFutbol {
    private equipo: string;
    private numeroCamiseta: number;

    constructor(id: number,nombre: string, apellido: string, edad: number, equipo: string, numeroCamiseta: number){
        super(id,nombre,apellido,edad);
        this.equipo = equipo
        this.numeroCamiseta = numeroCamiseta
    }
}


class Entrenador extends SeleccionFutbol {
    private nacionalidad: string;

    constructor(id: number,nombre: string, apellido: string, edad: number, nacionalidad: string){
        super(id,nombre,apellido,edad);
        this.nacionalidad = nacionalidad
    }
}


class Masajista extends SeleccionFutbol {
    private titulo: string;
    private experiencia: number;


    constructor(id: number,nombre: string, apellido: string, edad: number, titulo: string, experiencia: number){
        super(id,nombre,apellido,edad);
        this.titulo = titulo
        this.experiencia = experiencia
    }
}


const jugador1Seleccion = new Jugador(1, "Lionel", "Messi", 35, 'PSG',10)

console.log(jugador1Seleccion)
const masajistaSeleccion =  new Masajista(30, 'Juan', 'Perez', 55, 'Masajista', 10)
console.log(masajistaSeleccion)
const entrenadorSeleccion =  new Entrenador(28, 'Lionel', 'Scaloni', 44, 'Argentina')
console.log(entrenadorSeleccion)
