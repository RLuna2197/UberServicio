import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comentario } from '../model/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  url:string = environment.baseUrl;
  comentario: Comentario = new Comentario();
  constructor(private http: HttpClient) { }

  getComentarioByid(idServicio: number){
    const httpOptions = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      "llave": "Bearer eyJhbGciOiJIUzI1NiJ9.cm9iZXJMdW5hbHVuYTEyMw.BBD_ybOCN5btQEEzkN76HJ2u1bRTbD9zTr3lhYZr408"
      })
      };
    return this.http.get<any[]>(`${this.url}/Comentarios/${idServicio}`,httpOptions);
  }

  saveComentario(obj: Comentario){
    const httpOptions = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      "llave": "Bearer eyJhbGciOiJIUzI1NiJ9.cm9iZXJMdW5hbHVuYTEyMw.BBD_ybOCN5btQEEzkN76HJ2u1bRTbD9zTr3lhYZr408"
      })
      };
    this.comentario.idServicio = obj.idServicio;
    this.comentario.comentario = obj.comentario;
    this.comentario.calificacion = obj.calificacion;
    this.comentario.idServicio= obj.idServicio;
    this.comentario.idUsuario = obj.idUsuario;
    
    return this.http.post<Comentario>(this.url+'/Comentarios',this.comentario,httpOptions);
  }

}
