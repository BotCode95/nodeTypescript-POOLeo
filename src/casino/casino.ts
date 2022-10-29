interface ITragamonedas{
    //propiedades o variables internadas
    nombreDeJuego: string;
    probabilidadDeGanar: number;
    apuestas: number[];
    valorDeApuesta: number
    jugadorTiradas: Tirada[]
    cantidadDeTiradas: number
    //metodos a ejecutar
    getNombre():string
}

interface Tirada {
    perdio: number,
    gano: number,
    ganoPremioMaximo: boolean
}

class Tragamonedas implements ITragamonedas{
    nombreDeJuego: string;
    probabilidadDeGanar: number;
    apuestas: number[]
    valorDeApuesta: number;
    jugadorTiradas: Tirada[] 
    cantidadDeTiradas: number

    constructor(nombreDeJuego: string, probabilidadDeGanar: number, apuestas: number[]){
        this.nombreDeJuego = nombreDeJuego;
        this.probabilidadDeGanar =  probabilidadDeGanar
        this.apuestas = apuestas
        this.valorDeApuesta = 0;
        this.jugadorTiradas = []
        this.cantidadDeTiradas = 0
    }

    getNombre():string {
        return "El nombre del juego es: " + this.nombreDeJuego
    }

    getProbabilidadDeGanar():number{
        return this.probabilidadDeGanar = Math.random()
    }

    getJugadorTiradas(): Tirada[] {
        return this.jugadorTiradas
    }

    setValorDeApuesta(dineroDisponible: number, valorDeApuesta:number):void {
        const verificarValorDeApuesta = this.apuestas.find(valor => valor === valorDeApuesta)
        if(!verificarValorDeApuesta){
            throw new Error('El valor de la apuesta no es correcto')
        }
        const cantidadDeTiradas = dineroDisponible / valorDeApuesta
        this.valorDeApuesta = valorDeApuesta
        this.cantidadDeTiradas = cantidadDeTiradas
    }

    addJugadorTirada(tirada:Tirada):void{
        this.jugadorTiradas?.push(tirada)
    }
}

//Juego 1
class Tragamonedas1 extends Tragamonedas {

    premioMaximo: number
    constructor(nombreDeJuego: string, probabilidadDeGanar: number, apuestas: number[]){
        super(nombreDeJuego, probabilidadDeGanar, apuestas)
        this.premioMaximo = 0
    }

    setPremioMaximo(valorApuesta: number, ganoPremioMaximo: boolean):void{
        if(ganoPremioMaximo === true  ) {
            this.premioMaximo = 0
        }else {
            this.premioMaximo += (valorApuesta/2)

        }
    }
}

// Juego 2

class Tragamonedas2 extends Tragamonedas {


    constructor(nombreDeJuego: string, probabilidadDeGanar: number, apuestas: number[]){
        super(nombreDeJuego, probabilidadDeGanar, apuestas)
    }
}

//Creamos maquina 1
const tragamoneda1 = new Tragamonedas1('Juego de Dados', 5, [1,2,5,10,20,50,100])
//Creamos maquina 2
const tragamoneda2 = new Tragamonedas2('Juego de Toros', 2, [50,100,500,1000])

//Preguntamos al jugador cuanto dinero pone y que tipo de apuesta

//100, 10 
tragamoneda1.setValorDeApuesta(100,10)

console.log(tragamoneda1.getNombre())

//primer tirada

//si el jugador gano en la tirada no sumar premioMaximo  queda igual
//si gano el premio Maximo resetear el premioMaximo

function getRandom(valorMaximo: number) {
    return Math.floor(Math.random() * valorMaximo);
}
  
const numeroPremioMaximo = getRandom(10) 
for(let i=0; i< 100; i++){

const numeroProbabilidad = tragamoneda1.getProbabilidadDeGanar()
let numero1 = 0
let numero2 = 0
let numero3 = 0

console.log('El premio maximo es de ', tragamoneda1.premioMaximo)
    switch(true){
        case (numeroProbabilidad < 0.2) :
            numero1 = getRandom(10)
            numero2 = getRandom(10)
            numero3 = getRandom(10)
            break; //freno del switch
        case (numeroProbabilidad < 0.4) :
            numero1 = getRandom(8)
            numero2 = getRandom(8)
            numero3 = getRandom(8)
            break; //freno del switch
        case (numeroProbabilidad < 0.6):
            numero1 = getRandom(6)
            numero2 = getRandom(6)
            numero3 = getRandom(6)
            break; //freno del switch
        case (numeroProbabilidad < 0.8):
            numero1 = getRandom(4)
            numero2 = getRandom(4)
            numero3 = getRandom(4)
            break; //freno del switch
        case (numeroProbabilidad < 0.99):
            numero1 = getRandom(2)
            numero2 = getRandom(2)
            numero3 = getRandom(2)
            break; //freno del switch
        default:
            numero1 = getRandom(1) 
            numero2 = getRandom(1)
            numero3 = getRandom(1)
    }
        //2         2           2           2
  if (numero1 === numero2 && numero2 === numero3) { //que tambien gane con escalera por ejemplo 3,4,5
    if(numero3 === numeroPremioMaximo){
        tragamoneda1.addJugadorTirada({
            perdio: 0,
            gano: tragamoneda1.premioMaximo,
            ganoPremioMaximo: true
        })
        tragamoneda1.setPremioMaximo(0, true)   
    }else {
        tragamoneda1.addJugadorTirada({
            perdio: 0,
            gano: tragamoneda1.valorDeApuesta * getRandom(10),
            ganoPremioMaximo: false
        })
    }
  }else{
    tragamoneda1.addJugadorTirada({
        perdio: tragamoneda1.valorDeApuesta,
        gano: 0,
        ganoPremioMaximo: false
    })     
    tragamoneda1.setPremioMaximo(tragamoneda1.valorDeApuesta, false)   
  }
}
  tragamoneda1.getJugadorTiradas()

  console.log(tragamoneda1.jugadorTiradas)

