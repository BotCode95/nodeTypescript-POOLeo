class Equipo {
    //propiedades de una clase
    nombre: string;
    apellido: string;
    edad: number;
    nacionalidad: string;

    constructor(nombre: string, apellido: string, edad: number, nacionalidad: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad= edad;
        this.nacionalidad = nacionalidad;
    }
    //() Metodos
    mostrarDatos() {
        console.log(`La persona ${this.nombre} ${this.apellido} de nacionalidad ${this.nacionalidad} tiene ${this.edad} años de edad`)  //${}
    }
}

class JugadorReserva extends Equipo {
    puedePasarAPrimera: boolean
    constructor(nombre:string,apellido:string,edad:number,nacionalidad:string, puedePasarAPrimera: boolean) {
        super(nombre,apellido,edad,nacionalidad)
        this.puedePasarAPrimera = puedePasarAPrimera
    }
}

class JugadorProfesional extends Equipo {
    constructor(nombre: string, apellido: string, edad:number, nacionalidad:string){
        super(nombre,apellido,edad,nacionalidad)
    }
}

class DirectorTecnico extends Equipo {
    constructor(nombre: string, apellido: string, edad:number, nacionalidad:string){
        super(nombre,apellido,edad,nacionalidad)
    }
}

class Presidente extends Equipo {
    constructor(nombre: string, apellido: string, edad:number, nacionalidad:string){
        super(nombre,apellido,edad,nacionalidad)
    }
}

class CuerpoMedico extends Equipo{
    especialidad: string;
    constructor(nombre: string, apellido: string, edad:number, nacionalidad:string, especialidad: string){
        super(nombre,apellido,edad,nacionalidad)
        this.especialidad = especialidad
    }
}


const jugadorProfesional = new JugadorProfesional('Lionel', 'Messi', 35, 'Argentina')
const directorTecnico = new DirectorTecnico('Lionel', 'Scaloni', 44, 'Argentina')
const presidente = new Presidente('Jose', 'Perez', 66, 'Uruguay')

const masajista = new CuerpoMedico('Luis', 'Suarez', 40, 'Uruguay','Masajista')
const kinesiologo = new CuerpoMedico('Raul', 'Sanchez', 40, 'Uruguay', 'Kinesiologo')

const jugadorReserva = new JugadorReserva('Juan', 'Perez', 16, 'Argentina', true)


jugadorProfesional.mostrarDatos()
directorTecnico.mostrarDatos()
presidente.mostrarDatos()
masajista.mostrarDatos()
kinesiologo.mostrarDatos()

