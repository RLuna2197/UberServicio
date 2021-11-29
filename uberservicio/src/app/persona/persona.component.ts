import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/user';
import { Persona } from '../model/usuario';
import { LoginService } from '../services/login.service';
import { PersonaService } from '../services/persona.service';

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
  lista:string[]=["vendedor","comprador"];
  usuario: Usuario = new Usuario();
  persona: Persona = new Persona();
  formularioAgregar:FormGroup;
  idUsuario: number=0;

  constructor(private router: Router, private route: ActivatedRoute, private fb:FormBuilder, private dataApi : PersonaService, private dataA: LoginService) { 
    this.formularioAgregar=this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      telefono:['',Validators.required],
      correo:['',Validators.required],
      usuarioNombre:['',Validators.required],
      contrasena:['',Validators.required],
      urlFoto:['',Validators.required],
      vendedor:['',Validators.required],
      comprador:['',Validators.required]
      
    })
  }

  ngOnInit(): void {
    this.formularioAgregar=this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      telefono:['',Validators.required],
      correo:['',Validators.required],
      usuarioNombre:['',Validators.required],
      contrasena:['',Validators.required],
      urlFoto:['',Validators.required],
      vendedor:['',Validators.required],
      comprador:['',Validators.required]
      
    })
  }
  capturar(){
    console.log(this.captura)
  }

  agregarUsuario(){
    this.usuario =  this.formularioAgregar.value as Usuario;
    this.persona =  this.formularioAgregar.value as Persona;

    if (this.captura == "vendedor") { this.usuario.vendedor = true; this.usuario.comprador=false;}
    else{ this.usuario.comprador = false; this.usuario.vendedor=true;}
    this.usuario.estado = true;
    
    this.dataApi.saveUsuario(this.usuario).subscribe(res => {
      console.log(res);
      this.idUsuario = res.idUsuario;
      this.getUserName(this.usuario.usuarioNombre);
    }, err => {
      console.log(err);
      alert(err.error.message)
    })
  }

  agregarPersona(){
   
    this.persona.urlFoto = "defecto.png";
    this.persona.idUsuario = this.idUsuario;
    console.log(this.persona)
    console.log(this.usuario)
    this.dataApi.updatePersona(this.persona).subscribe(res => {
      console.log(res);
      this.router.navigate(['home']);
    }, err => {
      console.log(err);
      alert(err.error.message)
    })
  }

  private getUserName(user: string){

    this.dataA.getUserByUserName(user).subscribe(res => {
      this.idUsuario = res[0].idUsuario;
      this.agregarPersona()
    }, error => {
      console.log(error);
    })
  }

}
