import { Component, OnInit } from '@angular/core';
import { Servicio } from '../model/servicio';
import { ComentarioService } from '../services/comentario.service';
import { PersonaService } from '../services/persona.service';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-ver-servicio',
  templateUrl: './ver-servicio.component.html',
  styleUrls: ['./ver-servicio.component.css']
})
export class VerServicioComponent implements OnInit {
  servicios: Servicio[] = [];
  comentarios: any[] = [];
  personas: any[] =[];
  idPersona: string= "" ;

  constructor(private dataApi: ServicioService , private datApiComen: ComentarioService, private dataApiPerson: PersonaService) { }
  
  ngOnInit( ): void {

    localStorage.setItem('id', '7');
    
    this.getServicios();
    this.getComentarios();
    //this.idPersona = localStorage.getItem('id');
    this.idPersona = localStorage.getItem('id') as string;
    this.getPersonaByid(this.idPersona);
    
  }
  //Obtener Servicio
  private getServicios() {

    this.dataApi.getServiciosByid().subscribe((response) => {
      this.servicios = response;
    },
      (error) => { console.error(error); }
    );

    this.dataApi.getServiciosByid().subscribe((servicios) => console.log(servicios)); // mostrar en consola
  }
  
  //Obtener Comentario
  private getComentarios(){
    this.datApiComen.getComentarioByid().subscribe((response) => {
      this.comentarios = response;
    },
      (error) => { console.error(error); }
    );

    this.datApiComen.getComentarioByid().subscribe((comentarios) => console.log(comentarios)); // mostrar en consola
  }


  private getPersonaByid(idPersona: string){
    this.dataApiPerson.getPersonaByid(idPersona).subscribe((response) => {
      this.personas = response;
    },
      (error) => { console.error(error); }
    );

    this.dataApiPerson.getPersonaByid(idPersona).subscribe((persona) => console.log(persona)); // mostrar en consola
  }

  
}
