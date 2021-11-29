import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/user';
import { Persona } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url:string = environment.baseUrl;
  usuario: Usuario = new Usuario();
  persona: Persona = new Persona();

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

  saveUsuario(obj: Usuario){
    const httpOptions = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      "llave": "Bearer eyJhbGciOiJIUzI1NiJ9.cm9iZXJMdW5hbHVuYTEyMw.BBD_ybOCN5btQEEzkN76HJ2u1bRTbD9zTr3lhYZr408"
      })
      };
    this.usuario.correo = obj.correo;
    this.usuario.usuarioNombre = obj.usuarioNombre;
    this.usuario.contrasena = obj.contrasena;
    this.usuario.vendedor = obj.vendedor;
    this.usuario.comprador = obj.comprador;
    
    return this.http.post<Usuario>(this.url+'/Usuarios',this.usuario,httpOptions);
  }


  updatePersona(obj: Persona){
    const httpOptions = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      "llave": "Bearer eyJhbGciOiJIUzI1NiJ9.cm9iZXJMdW5hbHVuYTEyMw.BBD_ybOCN5btQEEzkN76HJ2u1bRTbD9zTr3lhYZr408"
      })
      };
    this.persona.idUsuario = obj.idUsuario
    this.persona.nombre = obj.nombre;
    this.persona.apellido = obj.apellido;
    this.persona.telefono = obj.telefono;
    this.persona.urlFoto = obj.urlFoto;
    
    return this.http.put<Persona>(this.url+'/Personas/'+this.persona.idUsuario,this.usuario,httpOptions);
  }
}
