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
      
      this.token = res.mensaje;
      sessionStorage.setItem('token', this.token); 
      this.router.navigate(['home']);
    }, err => {
      console.log(err);
    })


  }
}
