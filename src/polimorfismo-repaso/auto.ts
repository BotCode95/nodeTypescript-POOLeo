class Auto {
    private marca : string; 
    private modelo: string;
    protected velocidadActual : number;


    constructor(marca: string, modelo:string) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadActual = 0;
    }


    public acelerar():void {
        this.velocidadActual += 10;
    }
}

class AutoDeportivo extends Auto {


    constructor(marca: string, modelo:string) {
        super(marca, modelo)
    }

    public acelerar():void {
        this.velocidadActual += 50;
    }
}

const auto = new Auto('Fiat', '500')

auto.acelerar()
const autoDeportivo = new AutoDeportivo('Toyota', 'Supra')

autoDeportivo.acelerar()

console.log(auto)
console.log(autoDeportivo)