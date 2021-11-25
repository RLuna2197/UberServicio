export class Servicio {
    idServicio: number = 0;
    descripcion: string = '';
    nombre: string = '';
    precio: string = '';
    disponible: boolean = false;
    calificacion:number= 0;
    idCategoria: number = 0;
    idPersona: number = 0;

    constructor() {
        this.idServicio,
        this.descripcion,
        this.nombre,
        this.precio,
        this.disponible,
        this.calificacion,
        this.idCategoria,
        this.idPersona
    }
}