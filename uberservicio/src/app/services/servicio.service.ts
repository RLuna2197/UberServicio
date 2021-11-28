import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Servicio } from '../model/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  url:string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getServiciosByid(idServicio: number){
    const httpOptions = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      "llave": "Bearer eyJhbGciOiJIUzI1NiJ9.cm9iZXJMdW5hbHVuYTEyMw.BBD_ybOCN5btQEEzkN76HJ2u1bRTbD9zTr3lhYZr408"
      })
      };
    return this.http.get<Servicio[]>(`${this.url}/Servicios/${idServicio}`,httpOptions);
  }

  //Obtener servicio segun usuario logeado
  getServiciosByUsuario(idUsuario: number){
    const httpOptions = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      "llave": "Bearer eyJhbGciOiJIUzI1NiJ9.cm9iZXJMdW5hbHVuYTEyMw.BBD_ybOCN5btQEEzkN76HJ2u1bRTbD9zTr3lhYZr408"
      })
      };
    return this.http.get<Servicio[]>(`${this.url}/Servicios/persona/${idUsuario}`,httpOptions);
  }

  getTodosServicios(){
    const httpOptions = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      "llave": "Bearer eyJhbGciOiJIUzI1NiJ9.cm9iZXJMdW5hbHVuYTEyMw.BBD_ybOCN5btQEEzkN76HJ2u1bRTbD9zTr3lhYZr408"
      })
      };
    return this.http.get<any[]>(this.url+'/Servicios',httpOptions);
  }
}
