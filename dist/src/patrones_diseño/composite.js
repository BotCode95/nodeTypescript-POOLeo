"use strict";
// /**
//  * The base Component class declares common operations for both simple and
//  * complex objects of a composition.
//  */
//  abstract class Component {
//     protected padre!: Component | null;
//     /**
//      * Optionally, the base Component can declare an interface for setting and
//      * accessing a parent of the component in a tree structure. It can also
//      * provide some default implementation for these methods.
//      */
//     public setPadre(padre: Component | null) {
//         this.padre = padre;
//     }
//     public getPadre(): Component | null{
//         return this.padre;
//     }
//     /**
//      * In some cases, it would be beneficial to define the child-management
//      * operations right in the base Component class. This way, you won't need to
//      * expose any concrete component classes to the client code, even during the
//      * object tree assembly. The downside is that these methods will be empty
//      * for the leaf-level components.
//      */
//     public agregarComponente(component: Component): void { }
//     public eliminarComponente(component: Component): void { }
//     /**
//      * You can provide a method that lets the client code figure out whether a
//      * component can bear children.
//      */
//     public isComposite(): boolean {
//         return false;
//     }
//     /**
//      * The base Component may implement some default behavior or leave it to
//      * concrete classes (by declaring the method containing the behavior as
//      * "abstract").
//      */
//     public abstract operation(): string;
// }
// /**
//  * The Leaf class represents the end objects of a composition. A leaf can't have
//  * any children.
//  *
//  * Usually, it's the Leaf objects that do the actual work, whereas Composite
//  * objects only delegate to their sub-components.
//  */
// class Leaf extends Component {
//     public operation(): string {
//         return 'Leaf';
//     }
// }
// /**
//  * The Composite class represents the complex components that may have children.
//  * Usually, the Composite objects delegate the actual work to their children and
//  * then "sum-up" the result.
//  */
// class Composite extends Component {
//     protected children: Component[] = [];  //hijos => comienza en array vacio 
//     /**
//      * A composite object can add or remove other components (both simple or
//      * complex) to or from its child list.
//      */
//     public agregar(component: Component): void {
//         this.children.push(component);
//         component.setPadre(this);
//     }
//     public eliminar(component: Component): void {
//         const componentIndex = this.children.indexOf(component);
//         this.children.splice(componentIndex, 1);
//         component.setPadre(null);
//     }
//     public isComposite(): boolean {
//         return true;
//     }
//     /**
//      * The Composite executes its primary logic in a particular way. It
//      * traverses recursively through all its children, collecting and summing
//      * their results. Since the composite's children pass these calls to their
//      * children and so forth, the whole object tree is traversed as a result.
//      */
//     public operation(): string {
//         const results = [];
//         for (const child of this.children) { //recorre el listado de hijos (children = ["1", "2"])
//             results.push(child.operation());
//         }
//         return `Rama(${results.join('+')})`; //1+2+3+4+5
//     }
// }
/**
 * The client code works with all of the components via the base interface.
 */
// function clientCode(component: Component) {
//     // ...
//     console.log(`Resultado: ${component.operation()}`);
//     // ...
// }
/**
 * This way the client code can support the simple leaf components...
 */
// const simple = new Leaf();
// console.log('Client: Soy una simple hoja:');
// clientCode(simple);
// console.log('');
// /**
//  * ...as well as the complex composites.
//  */
// const arbol = new Composite();
// const rama1 = new Composite();
// rama1.agregar(new Leaf());
// rama1.agregar(new Leaf());
// const branch2 = new Composite();
// branch2.agregar(new Leaf());
// arbol.agregar(rama1);
// arbol.agregar(branch2);
// console.log('Client: Ahora soy un arbol compuesto:');
// clientCode(arbol);
// console.log('');
/**
 * Thanks to the fact that the child-management operations are declared in the
 * base Component class, the client code can work with any component, simple or
 * complex, without depending on their concrete classes.
 */
// function clientCode2(component1: Component, component2: Component) {
//     // ...
//     if (component1.isComposite()) {
//         component1.agregarComponente(component2);
//     }
//     console.log(`RESULT: ${component1.operation()}`);
//     // ...
// }
// console.log('Client:No necesito chequear los componentes de las clases cuando estoy manejando Arboles:');
// clientCode2(arbol, simple);
//# sourceMappingURL=composite.js.map