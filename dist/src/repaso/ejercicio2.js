"use strict";
//Efectivo Implemententa PaymentMethod, tiene el metodo pay que indica que el monto se paga en efectivo
class Efectivo {
    pay(cost) {
        console.log('Se pagó ' + cost + ' empleando efectivo');
    }
}
//Tarjeta Implemententa PaymentMethod, tiene el metodo pay que indica que el monto se paga con tarjeta
class Tarjeta {
    pay(cost) {
        console.log('Se pagó ' + cost + ' empleando tarjeta');
    }
}
const pagoConEfectivo = new Efectivo();
pagoConEfectivo.pay(5000);
const pagoConTarjeta = new Tarjeta();
pagoConTarjeta.pay(10000);
class Item {
    constructor(descripcion, costo) {
        this.descripcion = descripcion;
        this.costo = costo;
    }
    //GET : Obtener  (estas obteniendo informacion NO modificando)
    getDescripcion() { return this.descripcion; }
    getCosto() { return this.costo; }
    //SET : Establecer  (estas modificando informacion NO consultando)
    setDescripcion(descripcion) { this.descripcion = descripcion; }
    setCosto(costo) { this.costo = costo; }
    //equals: IGUAL  => Comparacion 
    equals(i) {
        //500         500             'Hola'              'Hola'  //true
        //500         600             'Hola'              'Hola'  //false
        return this.costo === i.getCosto() && this.descripcion === i.getDescripcion();
    }
    //Item Implemententa PaymentMethod, tiene el metodo pay que indica que el monto se paga en efectivo
    pay(cost) {
        console.log('Se pagó' + cost + 'empleando efectivo');
    }
}
class Cuenta {
    constructor() {
        this.lineItems = [];
    }
    addLineItem(lineItem) {
        this.lineItems.push(lineItem);
    }
    removeLineItem(lineItem) {
        for (let i = 0; i < this.lineItems.length; i++) {
            if (this.lineItems[i].equals(lineItem)) {
                this.lineItems.splice(i, 1);
            }
        }
    }
    getCostInCents() {
        return this.lineItems
            .map(item => item.getCosto())
            .reduce((a, b) => a + b, 0);
    }
    pay(method) {
        method.pay(this.getCostInCents());
    }
}
const item = new Item('Producto 1', 500);
const item2 = new Item('Producto 1', 500);
console.log("Se verifica si los items son iguales", item.equals(item2));
console.log("Precio del item:", item.getCosto());
console.log("Descripcion de item: ", item.getDescripcion());
item.setCosto(700); //Cambiando la informacion
console.log("Precio del item: ", item.getCosto());
item.setDescripcion('Producto 3'); //Cambiando la informacion
console.log("Descripcion de item: ", item.getDescripcion());
//# sourceMappingURL=ejercicio2.js.map