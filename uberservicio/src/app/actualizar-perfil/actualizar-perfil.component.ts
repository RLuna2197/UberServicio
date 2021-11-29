import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../model/usuario';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-actualizar-perfil',
  templateUrl: './actualizar-perfil.component.html',
  styleUrls: ['./actualizar-perfil.component.css']
})
export class ActualizarPerfilComponent implements OnInit {
  personas: Persona [] = [];
  personaOld: Persona = new Persona();
  personaNew: Persona = new Persona();
  personaForm=new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    telefono: new FormControl(''),
    urlFoto: new FormControl('')
  })

  constructor(private servicePersona: PersonaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.personaOld = JSON.parse(this.route.snapshot.params['persona']);
    console.log(this.personaOld);
  }

  public actualizarPersona(){
    this.servicePersona.updatePerfil(this.personaForm.value)
    .subscribe(res=>{
      this.personas.push(res)
      this.personaForm.reset('');

    },error=>{
      console.log(error);
    })
  }

}
