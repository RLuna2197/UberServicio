export class Usuario {
    idUsuario: number = 0;
    nombre: string = '';
    correo: string = ''; 
    usuarioNombre: string = '';  
    contrasena: string = '';   
    vendedor: boolean=false;
    comprador: boolean=false;
    estado: boolean=true;
    mensaje: string="";
    

    constructor() {
        this.idUsuario,
        this.nombre,
        this.correo,
        this.usuarioNombre,
        this.contrasena,
        this.vendedor,
        this.comprador,
        this.estado,
        this.mensaje
    }
}