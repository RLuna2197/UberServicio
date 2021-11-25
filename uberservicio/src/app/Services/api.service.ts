import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Servicio } from '../model/Servicio';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getServicios(){
    const httpOptions = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      "llave": "Bearer eyJhbGciOiJIUzI1NiJ9.cm9iZXJMdW5hbHVuYTEyMw.BBD_ybOCN5btQEEzkN76HJ2u1bRTbD9zTr3lhYZr408"
      })
      };
    return this.http.get<Servicio[]>(`${this.url}/Servicios/Categoria/1`,httpOptions);
  }

}
