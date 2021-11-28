import { Component, OnInit } from '@angular/core';
import { Servicio } from '../model/servicio';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-ver-servicio-c',
  templateUrl: './ver-servicio-c.component.html',
  styleUrls: ['./ver-servicio-c.component.css']
})
export class VerServicioCComponent implements OnInit {
  servicios: Servicio[] = [];
  idUsuario: number = 0;

  constructor(private dataApi: ServicioService) { }

  ngOnInit(): void {
    this.idUsuario = Number(localStorage.getItem('id') as string);
    this.getServicioByUser(this.idUsuario);
  }

  private getServicioByUser(idPersona: number){
    
    this.dataApi.getServiciosByUsuario(idPersona).subscribe((response) => {
      this.servicios = response;
      
    },
      (error) => { console.error(error); }
    );

    this.dataApi.getServiciosByUsuario(idPersona).subscribe((servicio) => console.log(servicio)); // mostrar en consola
  }

}
