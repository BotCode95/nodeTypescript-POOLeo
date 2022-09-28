
class Vehiculo {
    public id: number;
    private marca: string;
    private modelo: string;
    private patente : string;
    private km: number;
    protected valor: number;

    constructor(id: number, marca: string, modelo: string, patente: string, km : number, valor: number){
        this.id = id
        this.marca = marca
        this.modelo = modelo
        this.patente  =patente
        this.km=km
        this.valor  =valor

    }
}


class Moto extends Vehiculo {
    private ruedas: number
    constructor(id: number,marca: string, modelo: string, patente: string, km: number, valor: number, ruedas: number = 2){
        super(id, marca, modelo, patente, km, valor)
        this.ruedas = ruedas
    }
}


class Automovil extends Vehiculo{
    private ruedas: number
    constructor(id: number,marca: string, modelo: string, patente: string, km: number, valor: number, ruedas: number = 4){
        super(id, marca, modelo, patente, km, valor)
        this.ruedas=ruedas
}
}

class Camion extends Vehiculo{
    private ruedas: number
    constructor(id: number,marca: string, modelo: string, patente: string, km: number, valor: number, ruedas: number){
        super(id,marca, modelo, patente, km, valor)
        this.ruedas = ruedas
}
}

export class RegistroAutomotor{

    private listado : Vehiculo[];

    constructor(listado: Vehiculo[] = []){
        this.listado= listado
    }

    consultarListado(){
        return this.listado
    }

    consultarAutomotor(id: number): Vehiculo | undefined{
        return this.listado.find(auto => auto.id === id)
    }
    borrarAutomotor(id: number): Vehiculo[] {
        return this.listado.filter(auto => auto.id !== id)
    }
    actualizarAutomotor(car:Vehiculo) : void{
        const indexAuto = this.listado.findIndex(auto => (auto.id === car.id))
        this.listado[indexAuto] = car
    }
    darDeAltaAutomotor(car : Vehiculo){
        return this.listado.push(car)

    }
}

//Instancia del Registro Automotor
const registro = new RegistroAutomotor()

//Instanciamos Autos 
const corollaRojo =new Automovil(0,'Toyota', 'Corolla', 'AD566HN', 0, 6000000)
const etiosGris =new Automovil(1,'Toyota','Etios', 'JKL990', 0, 5000000)

//Registrar los autos
registro.darDeAltaAutomotor(corollaRojo)
registro.darDeAltaAutomotor(etiosGris)

// Consultar los autos
console.log(registro.consultarListado())

//const hiluxNegra = new Automovil(2,'Toyota',"Hilux", "AF466XS", 0, 11000000)
// // //Actualizar auto
//registro.actualizarAutomotor(hiluxNegra)

// //volver a consultar autos para ver el listado actualizado
//const listado = registro.consultarListado()
 //console.log(registro.consultarListado())

// //consultar Auto especifico
//console.log(registro.consultarAutomotor(hiluxNegra.id))
// //borrar Auto
//console.log(registro.borrarAutomotor(hiluxNegra.id))
