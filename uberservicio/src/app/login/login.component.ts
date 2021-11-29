import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../model/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioAgregar:FormGroup;
  usuario: Usuario = new Usuario();
  token: string = "";
  user: Usuario[] = [];
  id: string = "";
  vendedor: boolean =false;
  comprador: boolean =false;

  constructor(private router: Router, private fb:FormBuilder, private dataApi: LoginService) {
    this.formularioAgregar=this.fb.group({
      usuario:['',(Validators.required, Validators.minLength(4))],
      contrasena:['',(Validators.required, Validators.minLength(4))]
    })
   }

  ngOnInit(): void {

    this.formularioAgregar=this.fb.group({
      usuario:['',(Validators.required, Validators.minLength(4))],
      contrasena:['',(Validators.required, Validators.minLength(4))]
    })
  }


  login(){
    this.usuario.usuarioNombre = this.formularioAgregar.value.usuario;
    this.usuario.contrasena = this.formularioAgregar.value.contrasena;
    
    this.dataApi.saveLogin(this.usuario).subscribe(res => {
      localStorage.setItem('user',this.usuario.usuarioNombre);
      this.token = res.mensaje;

      //Si es exitoso, obtenemos los datos de usuario
      this.obtenerUsuario(this.usuario.usuarioNombre);
      
     
     // this.router.navigate(['home']);
    }, err => {
      console.log(err);
      alert("Error")
    })


  }


   private obtenerUsuario(user: string){

    this.dataApi.getUserByid(user).subscribe((response) => {
      this.user = response;     
      this.id = response[0].idUsuario.toString();
      this.vendedor = response[0].vendedor;
      this.comprador = response[0].comprador;
      
      //Asignado variables de entorno
      localStorage.setItem('id', this.id);
      sessionStorage.setItem('token', this.token); 

      //Redirigiendo segun perfil
      if(this.vendedor){ this.router.navigate(['homev']); }
      if(this.comprador) { this.router.navigate(['home']); }
    },
      (error) => { console.error(error); }
    );

    this.dataApi.getUserByid(user).subscribe((persona) => console.log(persona)); // mostrar en consola
  
  }
}
