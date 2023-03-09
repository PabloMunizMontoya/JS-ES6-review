// -----------------------------------------

// modulo 

export default class Tarea5 {
    constructor(nombre, prioridad) {
        this.nombre = nombre
        this.prioridad = prioridad

    }
    mostrar() {
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`
    }
}