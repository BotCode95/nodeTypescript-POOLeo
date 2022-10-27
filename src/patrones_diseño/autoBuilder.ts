
interface IAutoBuilder {
    auto: AutoM
    setNumeroPuertas(puertas: number): this
    setCajaAutomatica(caja_automatica: boolean): this
    setAireAcondicionado(aire_acondicionado: boolean): this
    setAsientosCuero(asientos_cuero: boolean): this
    getResultados(): AutoM
}

class AutoM {
    modelo: string;
    marca: string;
    puertas?: number;
    caja_automatica?: boolean;
    aire_acondicionado?: boolean;
    asientos_cuero?: boolean;
    precio: number;
    color: string
    constructor(modelo: string, marca: string, precio: number, color: string, puertas: number = 4, caja_automatica: boolean = false, aire_acondicionado: boolean = false, asientos_cuero: boolean = false) {
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
        this.color= color;
        this.puertas = puertas;
        this.caja_automatica = caja_automatica;
        this.aire_acondicionado = aire_acondicionado;
        this.asientos_cuero = asientos_cuero;
    }


}
class AutoBuilder implements IAutoBuilder {
    auto: AutoM

    constructor(modelo:string, marca:string,precio:number, color:string) {
        this.auto = new AutoM(modelo,marca,precio,color)
    }

    setAireAcondicionado(aire_acondicionado: boolean): this {
        this.auto.aire_acondicionado = aire_acondicionado
        return this
    }

    setCajaAutomatica(caja_automatica: boolean): this {
        this.auto.caja_automatica = caja_automatica
        return this
    }

    setNumeroPuertas(puertas: number): this {
        this.auto.puertas = puertas
        return this
    }

    setAsientosCuero(asientos_cuero: boolean): this {
        this.auto.asientos_cuero = asientos_cuero
        return this
    }

    getResultados(): AutoM {
        return this.auto
    }
}

const autoCiudad = new AutoBuilder('208', 'Peugeot', 5000000, 'gris').setAireAcondicionado(false).setAsientosCuero(true).setNumeroPuertas(4).setCajaAutomatica(true)
const autoCiudad1 = new AutoBuilder('408', 'Peugeot', 30000000, 'gris').setAireAcondicionado(true).setAsientosCuero(true).setNumeroPuertas(4)
const autoCiudad2 = new AutoBuilder('4008', 'Peugeot', 10000000, 'gris').setAireAcondicionado(true).setAsientosCuero(true).setNumeroPuertas(4)
const autoDeportivo2 = new AutoBuilder('Supra', 'Toyota', 12000000, 'rojo').setAireAcondicionado(true).setAsientosCuero(true).setNumeroPuertas(2).setCajaAutomatica(true)
const camioneta = new AutoBuilder('Hilux', 'Toyota', 11000000, 'Negro').setAireAcondicionado(true).setAsientosCuero(true).setNumeroPuertas(4)

console.log(autoCiudad.getResultados());
console.log(autoCiudad1.getResultados());
console.log(autoCiudad2.getResultados());
console.log(autoDeportivo2.getResultados());
console.log(camioneta.getResultados());

