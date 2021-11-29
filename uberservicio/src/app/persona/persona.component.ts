import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/user';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  inputNombre: string = "";
  inputApellido: string ="";
  inputTelefono: string = "";
  inputCorreo: string = "";
  inputUsuarioNombre: string = "";
  inputContrasena: string = "";
  inputUrlFoto: string = "";
  inputVendedor: number=0;
  inputComprador: number=0;
  captura: string= "";
  usuario: Usuario = new Usuario();

  constructor() { }

  ngOnInit(): void {
  }
  capturar(){
    console.log(this.captura)
  }

  agregarUsuario(){
    if (this.captura == "vendedor") { this.usuario.vendedor = true;}

    else{ this.usuario.comprador = false;}

    this.usuario.correo = this.inputCorreo;
    this.usuario.usuarioNombre = this.inputUsuarioNombre;
    this.usuario.contrasena = this.inputContrasena;
    this.usuario.estado = true;
    console.log(this.usuario)
  }

}
