class Mamifero {
    private nombre:string;
    private edad:number;
    protected tipoComida: string;
    protected velocidad: number;

    constructor(nombre:string, edad: number){
        this.nombre = nombre;
        this.edad= edad;
        this.tipoComida = "";
        this.velocidad=0;
    }

    public comer(tipoDeComida: string):void {
        this.tipoComida =tipoDeComida;
    }

    public correr():void {
        this.velocidad =10;
    }

}

class Herbivoro extends Mamifero {
    constructor(nombre:string, edad: number){
        super(nombre, edad);
    }


    public correr():void{
        this.velocidad= 20;
    }
}

class Carnivoro extends Mamifero {
    constructor(nombre:string, edad: number){
        super(nombre, edad);
    }


    public correr():void{
        this.velocidad= 60;
    }
}

class Omnivoro extends Mamifero {
    constructor(nombre:string, edad: number){
        super(nombre, edad);
    }


    public correr():void{
        this.velocidad= 40;
    }
}


const tigre = new Carnivoro('tigre', 2);

const caballo = new Herbivoro('caballo',5);

const oso = new Omnivoro('oso', 8);

tigre.comer('carne');
tigre.correr();
caballo.comer('hojas');
caballo.correr();
oso.comer('miel');
oso.correr();

console.log(tigre);
console.log(caballo);
console.log(oso);