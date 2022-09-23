"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("./src/auto/car");
const car = new car_1.Car(0, 'Corolla', "Gris Metalico 1G3", 2015, 10);
car.arrancar();
car.acelerar();
car.acelerar();
car.acelerar();
car.acelerar();
car.acelerar();
// car.combustible = 15  //evitar esto
car.frenar();
const toyota = new car_1.Toyota(1, 'Corolla', 'Gris', 2020, 10);
const fiat = new car_1.Fiat(2, 'Cronos', 'Gris', 2022, 10);
console.log(toyota.combustible);
console.log("El color del toyota es: " + toyota.color);
//polimorfismo
function getModel(car) {
    console.log(car.nombre);
}
getModel(toyota);
getModel(fiat);
//# sourceMappingURL=index.js.map