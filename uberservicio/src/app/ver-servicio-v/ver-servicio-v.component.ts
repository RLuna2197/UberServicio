import { Component, NgModule, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';


@Component({
  selector: 'app-ver-servicio-v',
  templateUrl: './ver-servicio-v.component.html',
  styleUrls: ['./ver-servicio-v.component.css']
})

export class VerServicioVComponent implements OnInit {
  pedidos: any[] = [];
  idServicio: number = 0;
  term: string="";

  constructor(private DataApi: PedidoService) { }

  ngOnInit(): void {
    this.idServicio = Number(localStorage.getItem('id') as string);
    
    this.getPedidoByServicios(this.idServicio);
  }

  private getPedidoByServicios(idServicio: number){
    
    this.DataApi.getPedidoByServicio(idServicio).subscribe((response) => {
      this.pedidos = response;
      
    },
      (error) => { console.error(error); }
    );

    this.DataApi.getPedidoByServicio(idServicio).subscribe((pedido) => console.log(pedido)); // mostrar en consola
  }

}
