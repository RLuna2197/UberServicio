import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from '../model/comentario';
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
  formularioComentario:FormGroup;
  servicios: Servicio[] = [];
  comentarios: any[] = [];
  personas: any[] =[];
  idPersona: string= "" ;
  inputComentario: string="";
  califi: number=0;
  comentarioNuevo: Comentario = new Comentario();
  

  constructor(private fb:FormBuilder, private dataApi: ServicioService , private datApiComen: ComentarioService, private dataApiPerson: PersonaService) {
    this.formularioComentario=this.fb.group({
      comentario:['',Validators.required],
      calificacion:['',Validators.required]    
    })
   }
  
  ngOnInit( ): void {

    localStorage.setItem('id', '7');
    
    this.getServicios();
    this.getComentarios();
    //Obteniendo el usuario logeado
    this.idPersona = localStorage.getItem('id') as string;
    this.getPersonaByid(this.idPersona);

    this.formularioComentario=this.fb.group({
      comentario:['',Validators.required],
      calificacion:['',Validators.required]    
    })
    
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

  //Obtener datos de usuario registrado
  private getPersonaByid(idPersona: string){
    this.dataApiPerson.getPersonaByid(idPersona).subscribe((response) => {
      this.personas = response;
    },
      (error) => { console.error(error); }
    );

    this.dataApiPerson.getPersonaByid(idPersona).subscribe((persona) => console.log(persona)); // mostrar en consola
  }


  //Comentario
  calificacion(cali: number){
    this.califi = cali; 
    console.log(cali)
  }

  agregarComentario(){
    this.comentarioNuevo.comentario = this.inputComentario;
    this.comentarioNuevo.calificacion = this.califi;
    this.comentarioNuevo.idServicio = 5;
    this.comentarioNuevo.idUsuario = Number(this.idPersona);
    
    this.datApiComen.saveComentario(this.comentarioNuevo).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
  
}
