import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = environment.baseUrl;
  usuario: Usuario= new Usuario();

  constructor(private http: HttpClient) { }

  getUserByid(user: string){
    const httpOptions = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      "llave": "Bearer eyJhbGciOiJIUzI1NiJ9.cm9iZXJMdW5hbHVuYTEyMw.BBD_ybOCN5btQEEzkN76HJ2u1bRTbD9zTr3lhYZr408"
      })
      };
    return this.http.get<Usuario[]>(`${this.url}/Usuarios/${user}`,httpOptions);
  }

  saveLogin(obj: Usuario){
    const httpOptions = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json' })
      };
    this.usuario.correo = obj.correo;
    this.usuario.usuarioNombre = obj.usuarioNombre;
    this.usuario.contrasena = obj.contrasena;
    this.usuario.vendedor = obj.vendedor;
    this.usuario.comprador = obj.comprador;
    this.usuario.estado = obj.estado;
    
    return this.http.post<Usuario>(this.url+`/Login/${this.usuario.usuarioNombre}/${this.usuario.contrasena}`,this.usuario,httpOptions);
  }

}
