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
