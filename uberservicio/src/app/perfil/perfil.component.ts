import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/user';
import { Persona } from '../model/usuario';
import { LoginService } from '../services/login.service';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  personas: Persona[]=[]
  persona: Persona = new Persona();
  idPersona: string= "" ;
  idUsuario: string= "cristi98" ;
  usuarios: Usuario[]=[];

  constructor(private dataApi: PersonaService, private dataUsuario: LoginService, private ruta: Router) { }

  ngOnInit(): void {
    this.getUsuario(this.idUsuario);
    //localStorage.setItem('id', '1');//borrar al traer cambios
    this.idPersona = localStorage.getItem('id') as string;
    this.getPersonaByid(this.idPersona)
  }

  //Obtener datos de usuario registrado
  private getPersonaByid(idPersona: string){
    this.dataApi.getPersonaByid(idPersona).subscribe((response) => {
      this.personas = response;
    },
      (error) => { console.error(error); }
    );

    this.dataApi.getPersonaByid(idPersona).subscribe((persona) => console.log(persona)); // mostrar en consola
  }



  private getUsuario(idUsuario: string) {
    this.dataUsuario.getUserByid(idUsuario).subscribe((response) => {
      this.usuarios = response;
    },
      (error) => { console.error(error); }
    );
    this.dataUsuario.getUserByid(idUsuario).subscribe((usuario) => console.log(usuario)); // mostrar en consola
  }

  updatePerfil(obj: Persona){
    this.persona=obj;
    this.ruta.navigate(['actualizar-perfil', {persona:JSON.stringify(this.persona)}]);

  }

}
