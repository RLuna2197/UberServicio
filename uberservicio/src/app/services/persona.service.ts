import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url:string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPersonaByid(idUsuario: string){
    const httpOptions = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      "llave": "Bearer eyJhbGciOiJIUzI1NiJ9.cm9iZXJMdW5hbHVuYTEyMw.BBD_ybOCN5btQEEzkN76HJ2u1bRTbD9zTr3lhYZr408"
      })
      };
    return this.http.get<any[]>(`${this.url}/Personas/${idUsuario}`,httpOptions);
    //return this.http.get<any[]>(`${this.url}/Personas/${idUsuario}`,httpOptions);
  }
}
