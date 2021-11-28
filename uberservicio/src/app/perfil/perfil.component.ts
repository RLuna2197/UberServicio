import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/usuario';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  personas: Persona[]=[]
  idPersona: string= "" ;

  constructor(private dataApi: PersonaService) { }

  ngOnInit(): void {
    localStorage.setItem('id', '1');//borrar al traer cambios
    this.idPersona = localStorage.getItem('id') as string;
    this.getPersonaByid(this.idPersona);


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

}
