"use strict";
class PistaDeAudio {
    constructor(id, titulo, duracion, interprete) {
        this.id = id;
        this.titulo = titulo;
        this.duracion = duracion;
        this.interprete = interprete;
    }
}
class AdminPîstasAudio {
    constructor() {
        this.listaReproduccion = [];
    }
    informacion(pistas) {
        //Cuantas canciones hay en el array
        console.log("Cantidad de canciones: ", pistas.length);
        //Duracion total de cancion
        let duracionCanciones = [];
        for (let i = 0; i < pistas.length; i++) {
            duracionCanciones.push(`duracion de la canción ${pistas[i].titulo}: ${pistas[i].duracion}`);
        }
        console.log(duracionCanciones);
    }
}
const cancion1 = new PistaDeAudio(1, 'Un poco de amor fránces', '3:32', 'Patricio Rey y sus redonditos de ricota');
const cancion2 = new PistaDeAudio(2, 'Algo mejor que hacer', '4:25', 'Cuarteto de nos');
const administradorPistas = new AdminPîstasAudio();
let canciones = [cancion1, cancion2];
const informacionPistas = administradorPistas.informacion(canciones);
// console.log(informacionPistas)
//# sourceMappingURL=ejercicio1.js.map