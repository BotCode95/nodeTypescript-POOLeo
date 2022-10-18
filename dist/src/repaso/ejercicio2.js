"use strict";
class Efectivo {
    pay(cost) {
        console.log('Se pagó' + cost + 'empleando efectivo');
    }
}
class Tarjeta {
    pay(cost) {
        console.log('Se pagó' + cost + 'empleando tarjeta');
    }
}
class Item {
    constructor(descripcion, costo) {
        this.descripcion = descripcion;
        this.costo = costo;
    }
    getDescripcion() { return this.descripcion; }
    getCosto() { return this.costo; }
    setDescripcion(descripcion) { this.descripcion = descripcion; }
    setCosto(costo) { this.costo = costo; }
    equals(i) {
        return this.costo === i.getCosto() && this.descripcion === i.getDescripcion();
    }
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
const item2 = new Item('Producto 2', 600);
console.log("Se verifica si los items son iguales", item.equals(item2));
console.log("Precio del item:", item.getCosto());
console.log("Descripcion de item: ", item.getDescripcion());
item.setCosto(700);
console.log("Precio del item: ", item.getCosto());
item.setDescripcion('Producto 3');
console.log("Descripcion de item: ", item.getDescripcion());
//# sourceMappingURL=ejercicio2.js.map