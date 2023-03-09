class ComprasPendientes extends Tarea5{
    constructor (nombre, prioridad) {
        this.nombre = nombre
        this.prioridad = prioridad
    }
    mostrar() {
        super.mostrar()
        console.log ( `y la cantidad de ${this.cantidad}`)
    }
    hola() {
        return 'hola'
    }
}