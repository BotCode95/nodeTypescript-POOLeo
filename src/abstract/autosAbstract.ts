
abstract class AutoM {
    nombreVehiculo: string;
    constructor(nombreVehiculo: string) {
        this.nombreVehiculo = nombreVehiculo;
    }
    //metodo abstract
    abstract obtenerNombreVehiculo() : string;

}


class AutoCiudad extends AutoM {

    constructor(nombreVehiculo:string){
        super(nombreVehiculo);
    }

    obtenerNombreVehiculo() {
        return this.nombreVehiculo;
    }
}

const autoCiudad = new AutoCiudad('Peugeot 208');


console.log(autoCiudad.obtenerNombreVehiculo());