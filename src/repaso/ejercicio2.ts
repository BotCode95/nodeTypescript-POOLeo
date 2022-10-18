interface PaymentMethod {
    pay(cost: number) :void;
}

//Efectivo Implemententa PaymentMethod, tiene el metodo pay que indica que el monto se paga en efectivo
class Efectivo implements PaymentMethod {
    public pay(cost: number) : void{
        console.log('Se pagó ' + cost + ' empleando efectivo')
    }
}
//Tarjeta Implemententa PaymentMethod, tiene el metodo pay que indica que el monto se paga con tarjeta
class Tarjeta implements PaymentMethod {
    public pay(cost: number) : void{
        console.log('Se pagó ' + cost + ' empleando tarjeta')
    }
}

const pagoConEfectivo = new Efectivo()
pagoConEfectivo.pay(5000)

const pagoConTarjeta = new Tarjeta()

pagoConTarjeta.pay(10000)

class Item implements PaymentMethod{
    private descripcion: string;
    private costo: number;

    public constructor(descripcion: string, costo:number){
        this.descripcion = descripcion;
        this.costo = costo
    }
    //GET : Obtener  (estas obteniendo informacion NO modificando)
    public getDescripcion(): string { return this.descripcion;}
    public getCosto() :number {return this.costo;}
    //SET : Establecer  (estas modificando informacion NO consultando)
    public setDescripcion(descripcion: string): void {this.descripcion = descripcion;}
    public setCosto(costo:number):void {this.costo =costo;}

    //equals: IGUAL  => Comparacion 
    public equals(i: Item):boolean{
                    //500         500             'Hola'              'Hola'  //true
                    //500         600             'Hola'              'Hola'  //false
        return this.costo === i.getCosto() && this.descripcion === i.getDescripcion();
    }

    //Item Implemententa PaymentMethod, tiene el metodo pay que indica que el monto se paga en efectivo
    public pay(cost: number) : void{
        console.log('Se pagó' + cost + 'empleando efectivo')
    }
}


class Cuenta{
    private lineItems: Item[] = []

    public addLineItem(lineItem: Item) : void{
        this.lineItems.push(lineItem)
    }

    public removeLineItem(lineItem: Item): void {
        for(let i=0; i<this.lineItems.length; i++){
            if(this.lineItems[i].equals(lineItem)){
                this.lineItems.splice(i,1)
            }
        }
    }

    public getCostInCents():number{
        return this.lineItems
            .map(item => item.getCosto())
            .reduce((a,b) => a + b, 0)

    }

    public pay(method:PaymentMethod):void {
        method.pay(this.getCostInCents())
    }
}

const item = new Item('Producto 1', 500)
const item2 = new Item('Producto 1', 500)

console.log("Se verifica si los items son iguales", item.equals(item2))
console.log("Precio del item:", item.getCosto())
console.log("Descripcion de item: ", item.getDescripcion())

item.setCosto(700) //Cambiando la informacion
console.log("Precio del item: ",item.getCosto())

item.setDescripcion('Producto 3') //Cambiando la informacion
console.log("Descripcion de item: ",item.getDescripcion())