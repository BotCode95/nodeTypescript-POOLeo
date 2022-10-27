
 abstract class Component {
    protected carpeta!: Component | null;

    
    public setPadre(carpeta: Component | null) {
        this.carpeta = carpeta;
    }

    public getPadre(): Component | null{
        return this.carpeta;
    }
   
    public agregarComponente(component: Component): void { }

    public eliminarComponente(component: Component): void { }

    
    public isComposite(): boolean {
        return false;
    }


    public abstract operacion(): string;
}

class Hoja extends Component {
    public operacion(): string {
        return 'Hoja';
    }
}

class Archivos extends Component {
    protected children: Component[] = [];  //hijos => comienza en array vacio 

    public agregar(component: Component): void {
        this.children.push(component);
        component.setPadre(this);
    }

    public eliminar(component: Component): void {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);

        component.setPadre(null);
    }

    public isComposite(): boolean {
        return true;
    }

    public operacion(): string {
        const results = [];
        for (const child of this.children) { //recorre el listado de hijos (children = ["1", "2"])
            results.push(child.operacion());
        }

        return `Archivos(${results.join('+')})`; //1+2+3+4+5
    }
}


/**
 * The client code works with all of the components via the base interface.
 */
function Resultado(component: Component) {
    // ...

    console.log(`Resultado: ${component.operacion()}`);

    // ...
}


const simple = new Hoja();
console.log('Client: Soy una simple hoja:');
Resultado(simple);
console.log('');

const carpeta = new Archivos();
const archivos1 = new Archivos();
archivos1.agregar(new Hoja());
archivos1.agregar(new Hoja());
const archivos2 = new Archivos();
archivos2.agregar(new Hoja());
carpeta.agregar(archivos2);
carpeta.agregar(archivos2);
console.log('Client: Ahora soy un arbol compuesto:');
Resultado(carpeta);

console.log('');