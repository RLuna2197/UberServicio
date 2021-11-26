import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  url:string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getComentarioByid(){
    const httpOptions = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      "llave": "Bearer eyJhbGciOiJIUzI1NiJ9.cm9iZXJMdW5hbHVuYTEyMw.BBD_ybOCN5btQEEzkN76HJ2u1bRTbD9zTr3lhYZr408"
      })
      };
    return this.http.get<any[]>(`${this.url}/Comentarios/5`,httpOptions);
  }
}
