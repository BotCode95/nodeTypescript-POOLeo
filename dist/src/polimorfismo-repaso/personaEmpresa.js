"use strict";
class PersonaEmp {
    constructor(id, nombre, apellido, edad) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    edadPersona() {
        return `La edad de la persona es ${this.edad}`;
    }
    mostrarDatos() {
        const edadPersona = this.edadPersona();
        console.log(`La persona es ${this.nombre} ${this.apellido} y ${edadPersona} `);
    }
}
//extends = Heredar
class Empleado extends PersonaEmp {
    constructor(id, nombre, apellido, edad, sueldo, experienciaLaboral) {
        //Super contructor de la clase Padre
        super(id, nombre, apellido, edad);
        this.sueldo = sueldo;
        this.experienciaLaboral = experienciaLaboral;
    }
    mostrarSueldo() {
        console.log(`El sueldo de la persona es de ${this.sueldo}`);
    }
}
class Cliente extends PersonaEmp {
    constructor(id, nombre, apellido, edad, fidelidad) {
        //Super contructor de la clase Padre
        super(id, nombre, apellido, edad);
        this.fidelidad = fidelidad;
    }
}
const personaEmp = new PersonaEmp(3, 'Matias', 'Jael', 25);
const empleado11 = new Empleado(1, 'Juan', 'Bottino', 27, 200, 2);
const empleado12 = new Empleado(4, 'Juan', 'Saavedra', 27, 200, 2);
const cliente11 = new Cliente(2, 'Pablo', 'Guard', 22, 'Cliente de Vea');
empleado11.mostrarDatos();
empleado11.mostrarSueldo();
cliente11.mostrarDatos();
class Empresa {
    constructor(razonSocial, fechaCreacion) {
        this.razonSocial = razonSocial;
        this.fechaCreacion = fechaCreacion;
        this.listadoClientes = [];
        this.listadoEmpleados = [];
    }
    agregarCliente(nuevoCliente) {
        this.listadoClientes.push(nuevoCliente);
    }
    contratarEmpleado(nuevoEmpleado) {
        this.listadoEmpleados.push(nuevoEmpleado);
    }
    eliminarCliente(idCliente) {
        return this.listadoClientes.filter(cliente => (cliente.id !== idCliente));
    }
    despedirEmpleado(idEmpleado) {
        return this.listadoEmpleados.filter(empleado => (empleado.id !== idEmpleado));
    }
}
const empresa1 = new Empresa('Empresa S.A', '20/10/2000');
empresa1.contratarEmpleado(empleado11);
empresa1.contratarEmpleado(empleado12);
empresa1.agregarCliente(cliente11);
// empresa1.listadoEmpleados
console.log(empresa1.listadoEmpleados);
console.log(empresa1.listadoClientes);
//# sourceMappingURL=personaEmpresa.js.map