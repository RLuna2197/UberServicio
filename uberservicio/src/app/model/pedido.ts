export class Pedido {
    idPedido: number = 0;
    fechaInicio:Date=new Date();
    fechaFin:Date=new Date();
    horaInicio: Date=new Date();
    horaFin: Date=new Date();
    total:number = 0;
    idCliente:number = 0;

    constructor() {
        this.idPedido=this.idPedido;
        this.fechaInicio=this.fechaInicio;
        this.fechaFin=this.fechaFin;
        this.horaInicio=this.horaInicio;
        this.horaFin=this.horaFin;
        this.total=this.total
        this.idCliente = this.idCliente;
    }
}