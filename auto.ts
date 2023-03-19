export class Auto {
    nombre: string;
    anio: string;
    dueño: string;
    patente: string;
    km: number;
    constructor(nombre: string, anio: string, dueño: string, patente: string, km: number) {
        this.nombre = nombre;
        this.anio = anio;
        this.dueño = dueño;
        this.patente = patente;
        this.km = km;
    }
}