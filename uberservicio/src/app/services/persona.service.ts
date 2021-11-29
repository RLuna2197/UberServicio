import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  persona: Persona = new Persona();
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
  }

  /*updatePerfil(persona: any){
    const httpOptions = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      "llave": "Bearer eyJhbGciOiJIUzI1NiJ9.cm9iZXJMdW5hbHVuYTEyMw.BBD_ybOCN5btQEEzkN76HJ2u1bRTbD9zTr3lhYZr408"
      })
      };
    return this.http.put(`${this.url}/Personas/`,persona,httpOptions);
  }*/

  public updatePerfil(obj: Persona){
    const httpOptions = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      "llave": "Bearer eyJhbGciOiJIUzI1NiJ9.cm9iZXJMdW5hbHVuYTEyMw.BBD_ybOCN5btQEEzkN76HJ2u1bRTbD9zTr3lhYZr408"
      })
      };
    this.persona.nombre = obj.nombre
    this.persona.apellido = obj.apellido;
    this.persona.telefono = obj.telefono;
    this.persona.urlFoto = obj.urlFoto;
    
    return this.http.put<Persona>(this.url+'/Personas',this.persona,httpOptions);
  }
  
}
