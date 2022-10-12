class Animal {
    private tipo: string;
    private edad: number;
    protected tipoComida: string;


    constructor(tipo: string, edad: number){
        this.tipo=tipo;
        this.edad= edad;
        this.tipoComida = "";
    }


    public comer():void {
        this.tipoComida = "";
    }
}


class Felino extends Animal{
    constructor(tipo: string, edad: number){
        super(tipo,edad);
    }

    public comer():void {
        this.tipoComida = 'carne';
    }

    public rugir() :void{
        console.log('rugiendooo!');
    }
}


class Pez extends Animal{
    constructor(tipo: string, edad: number){
        super(tipo,edad);
    }
    comer():void {
        this.tipoComida = 'insectos';
    }
}

const felino = new Felino('León', 2);

felino.comer();
console.log(felino);
felino.rugir();
const pez = new Pez("Pejerrey", 0.3);

pez.comer();


console.log(pez);
