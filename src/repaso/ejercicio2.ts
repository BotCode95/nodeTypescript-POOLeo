interface PaymentMethod {
    pay(cost: number) :void;
}

class Efectivo implements PaymentMethod {
    public pay(cost: number) : void{
        console.log('Se pagó' + cost + 'empleando efectivo')
    }
}

class Tarjeta implements PaymentMethod {
    public pay(cost: number) : void{
        console.log('Se pagó' + cost + 'empleando tarjeta')
    }
}

class Item {
    private descripcion: string;
    private costo: number;

    public constructor(descripcion: string, costo:number){
        this.descripcion = descripcion;
        this.costo = costo
    }
    public getDescripcion(): string { return this.descripcion;}
    public getCosto() :number {return this.costo;}
    public setDescripcion(descripcion: string): void {this.descripcion = descripcion;}
    public setCosto(costo:number):void {this.costo =costo;}


    public equals(i: Item):boolean{
        return this.costo === i.getCosto() && this.descripcion === i.getDescripcion();
    }


    public pay(cost: number) : void{
        console.log('Se pagó' + cost + 'empleando efectivo')
    }
}


class Cuenta {
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
const item2 = new Item('Producto 2', 600)

console.log(item.equals(item2))
console.log(item.getCosto())
console.log(item.getDescripcion())
item.setCosto(700)
console.log(item.getCosto())
item.setDescripcion('Producto 3')
console.log(item.getDescripcion())