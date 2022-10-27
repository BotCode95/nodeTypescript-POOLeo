"use strict";
class Component {
    setPadre(carpeta) {
        this.carpeta = carpeta;
    }
    getPadre() {
        return this.carpeta;
    }
    agregarComponente(component) { }
    eliminarComponente(component) { }
    isComposite() {
        return false;
    }
}
class Hoja extends Component {
    operacion() {
        return 'Hoja';
    }
}
class Archivos extends Component {
    constructor() {
        super(...arguments);
        this.children = []; //hijos => comienza en array vacio 
    }
    agregar(component) {
        this.children.push(component);
        component.setPadre(this);
    }
    eliminar(component) {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
        component.setPadre(null);
    }
    isComposite() {
        return true;
    }
    operacion() {
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
function Resultado(component) {
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
//# sourceMappingURL=compositeArchivos.js.map