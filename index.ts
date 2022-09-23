import { Car, Toyota,Fiat } from './src/auto/car';


const car = new Car(0,'Corolla', "Gris Metalico 1G3",2015, 10)

car.arrancar()
car.acelerar()
car.acelerar()
car.acelerar()
car.acelerar()
car.acelerar()

// car.combustible = 15  //evitar esto
car.frenar()


const toyota  = new Toyota(1, 'Corolla', 'Gris', 2020, 10)
const fiat  = new Fiat(2,'Cronos', 'Gris', 2022, 10)

console.log(toyota.combustible)
console.log("El color del toyota es: " + toyota.color)


//polimorfismo

function getModel (car: Car){
    console.log(car.nombre)
}

getModel(toyota)
getModel(fiat)
