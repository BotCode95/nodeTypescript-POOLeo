export class Car {
    id: number;
    nombre: string;
    color: string;
    anio: number;
    private _combustible: number;
    
    constructor(id: number = 1, nombre:string, color: string, anio: number, combustible: number){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.anio = anio;
        this._combustible =combustible;

    }
    arrancar(): void {
        console.log('inicia su recorrido')
        
    }
    acelerar(): void {
        this._combustible --;
    }
    frenar(): void {
        clearInterval
    }


    get combustible() : number {
        return this._combustible
    }
}

export class RegistroAutomotor{

    private listado : Car[];

    constructor(listado: Car[] = []){
        this.listado= listado
    }

    consultarListado(){
        return this.listado
    }

    consultarAutomotor(id: number): Car | undefined{
        return this.listado.find(auto => auto.id === id)
    }
    borrarAutomotor(id: number): Car[] {
        return this.listado.filter(auto => auto.id !== id)
    }
    actualizarAutomotor(car:Car) : void{
        const indexAuto = this.listado.findIndex(auto => (auto.id === car.id))
        this.listado[indexAuto] = car
    }
    darDeAltaAutomotor(car : Car){
        return this.listado.push(car)

    }
}

export class Matriz {

    get ConsultarDatos() : Car[] {
        return listado
    }
}


export class Toyota extends Car {
    CuatroXCuatro(){
        return 'el vehiculo es 4x4'
    }
}

export class Fiat extends Car {
    
}


//Instancia del Registro Automotor
const registro = new RegistroAutomotor()

//Instanciamos Autos 
const corollaRojo =new Toyota(0,'Corolla', 'Rojo', 2020, 20)
const etiosGris =new Toyota(1,'Etios', 'Gris', 2018, 20)

//Registrar los autos
registro.darDeAltaAutomotor(corollaRojo)
registro.darDeAltaAutomotor(etiosGris)

// Consultar los autos
console.log(registro.consultarListado())

const hiluxNegra = new Toyota(1,"Hilux", "Negro", 2018, 20)
// // //Actualizar auto
registro.actualizarAutomotor(hiluxNegra)

// //volver a consultar autos para ver el listado actualizado
const listado = registro.consultarListado()
 console.log(registro.consultarListado())

// //consultar Auto especifico
console.log(registro.consultarAutomotor(hiluxNegra.id))
// //borrar Auto
console.log(registro.borrarAutomotor(hiluxNegra.id))

//Instancia de matriz
const matriz = new Matriz();

//Consulta del listado con el metodo get
console.log(matriz.ConsultarDatos)