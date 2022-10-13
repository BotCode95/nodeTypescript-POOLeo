
abstract class AutoM {
    modelo: string;
    marca: string
    constructor(modelo: string, marca: string) {
        this.modelo = modelo;
        this.marca = marca;
    }
    //metodo abstract
    abstract obtenerNombreVehiculo() : string;

}


class AutoCiudad extends AutoM {
    velocidad: number
    constructor(modelo: string, marca: string){
        super(modelo, marca);
        this.velocidad = 0;
    }

    obtenerNombreVehiculo() {
        return `Modelo: ${this.modelo} de la Marca ${this.marca}`;
    }

    acelerar() {
        this.velocidad += 10
    }
}

class AutoDeportivos extends AutoM {
    velocidad: number
    constructor(modelo: string, marca: string){
        super(modelo, marca);
        this.velocidad = 0;
    }

    obtenerNombreVehiculo() {
        return `Modelo: ${this.modelo} de la Marca ${this.marca}`;
    }

    acelerar() {
        this.velocidad += 30
    }
}


class Camioneta extends AutoM {
    velocidad: number
    constructor(modelo: string, marca: string){
        super(modelo, marca);
        this.velocidad = 0;
    }

    obtenerNombreVehiculo() {
        return `Modelo: ${this.modelo} de la Marca ${this.marca}`;
    }

    acelerar() {
        this.velocidad += 20
    }
}




const autoCiudad = new AutoCiudad('208', 'Peugeot');
const autoDeportivo2 = new AutoDeportivos('Supra', 'Toyota');
const camioneta = new Camioneta('Hilux', 'Toyota');


console.log(autoCiudad.obtenerNombreVehiculo());
console.log(autoDeportivo2.obtenerNombreVehiculo());
console.log(camioneta.obtenerNombreVehiculo());