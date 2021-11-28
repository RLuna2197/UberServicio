export class Servicio {
    idServicio: number = 0;
    nombre: string = '';
    descripcion: string = '';  
    precio: string = '';
    disponible: boolean = false;
    calificacion:number= 0;
    nombreCategoria: string = '';
    idPersona: number=0;
    persona:string = '';
    Imagenes: Array<any> = [];
    Comentarios: Array<any> = [];

    constructor() {
        this.idServicio,
        this.descripcion,
        this.nombre,
        this.precio,
        this.disponible,
        this.calificacion,
        this.nombreCategoria,
        this.persona,
        this.Imagenes,
        this.Comentarios,
        this.idPersona
    }
}