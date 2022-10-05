class Personas {

    //propiedades
    nombre: string
    apellido: string
    edad: number;
    fechaNacimiento: Date

    //constructor 
    constructor(nombre: string, apellido: string, edad: number, fechaNacimiento: Date){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.fechaNacimiento = fechaNacimiento
    }
    //metodos
    fullName() : string {
        return `El nombre completo de la persona es ${this.nombre} ${this.apellido}`
    }
}



const persona1 = new Personas('Juan Jose', 'Alterd', 25, new Date('25/06/2000'))


console.log(persona1.fullName())