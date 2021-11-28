import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HistorialConversion } from '../model/historialConversion';
import { Pedido } from '../model/pedido';
import { PedidoServicio } from '../model/pedidoServicio';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  url:string = environment.baseUrl;
  pedido: Pedido = new Pedido();
  pedidoServicio: PedidoServicio = new PedidoServicio();
  hConversion: HistorialConversion = new HistorialConversion();

  constructor(private http: HttpClient) { }

  getPedidoByUsuario(idUsuario: number){
    const httpOptions = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      "llave": "Bearer eyJhbGciOiJIUzI1NiJ9.cm9iZXJMdW5hbHVuYTEyMw.BBD_ybOCN5btQEEzkN76HJ2u1bRTbD9zTr3lhYZr408"
      })
      };
    return this.http.get<any[]>(`${this.url}/Pedido/${idUsuario}`,httpOptions);
  }

  getPedidoByServicio(idServicios: number){
    const httpOptions = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      "llave": "Bearer eyJhbGciOiJIUzI1NiJ9.cm9iZXJMdW5hbHVuYTEyMw.BBD_ybOCN5btQEEzkN76HJ2u1bRTbD9zTr3lhYZr408"
      })
      };
    return this.http.get<any[]>(`${this.url}/Pedido/Servicio/${idServicios}`,httpOptions);
  }

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
    this.pedido.idCliente = obj.idCliente;
    
    return this.http.post<Pedido>(this.url+'/Pedido',this.pedido,httpOptions);
  }


  savePedidoServicio(obj: PedidoServicio){
    const httpOptions = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      "llave": "Bearer eyJhbGciOiJIUzI1NiJ9.cm9iZXJMdW5hbHVuYTEyMw.BBD_ybOCN5btQEEzkN76HJ2u1bRTbD9zTr3lhYZr408"
      })
      };
    this.pedidoServicio.idPedido = obj.idPedido;
    this.pedidoServicio.idServicio = obj.idServicio;
    
    return this.http.post<PedidoServicio>(this.url+'/PedidoServicio',this.pedidoServicio,httpOptions);
  }


  savehistorialConversion(obj: HistorialConversion){
    const httpOptions = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      "llave": "Bearer eyJhbGciOiJIUzI1NiJ9.cm9iZXJMdW5hbHVuYTEyMw.BBD_ybOCN5btQEEzkN76HJ2u1bRTbD9zTr3lhYZr408"
      })
      };
    this.hConversion.idConversion = obj.idConversion;
    this.hConversion.moneda = obj.moneda;
    this.hConversion.valor = obj.valor;
    this.hConversion.idPedido = obj.idPedido;
    
    return this.http.post<PedidoServicio>(this.url+'/HistoConversion',this.hConversion,httpOptions);
  }
}
