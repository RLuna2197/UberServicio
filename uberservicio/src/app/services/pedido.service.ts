import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  url:string = environment.baseUrl;
  pedido: Pedido = new Pedido();

  constructor(private http: HttpClient) { }

  savePedido(obj: Pedido){
    const httpOptions = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      "llave": "Bearer eyJhbGciOiJIUzI1NiJ9.cm9iZXJMdW5hbHVuYTEyMw.BBD_ybOCN5btQEEzkN76HJ2u1bRTbD9zTr3lhYZr408"
      })
      };
    this.pedido.fechaInicio = obj.fechaInicio
    this.pedido.fechaFin = obj.fechaFin;
    this.pedido.horaInicio = obj.horaInicio;
    this.pedido.horaFin = obj.horaFin;
    this.pedido.idPedido = obj.idPedido;
    this.pedido.total = obj.total;
    
    return this.http.post<Pedido>(this.url+'/Pedido',this.pedido,httpOptions);
  }
}
