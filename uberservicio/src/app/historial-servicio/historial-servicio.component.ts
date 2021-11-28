import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-historial-servicio',
  templateUrl: './historial-servicio.component.html',
  styleUrls: ['./historial-servicio.component.css']
})
export class HistorialServicioComponent implements OnInit {
  pedido: any[] = [];
  idPersona: number = 0;

  constructor(private dataApi: PedidoService) { }
  
  ngOnInit(): void {
    this.idPersona = Number(localStorage.getItem('id') as string);
  }

  private getPedidoByUser(idPersona: number){
    this.dataApi.getPedidoByUsuario(idPersona).subscribe((response) => {
      this.pedido = response;
    },
      (error) => { console.error(error); }
    );

    this.dataApi.getPedidoByUsuario(idPersona).subscribe((pedido) => console.log(pedido)); // mostrar en consola
  }

}
