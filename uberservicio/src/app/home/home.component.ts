import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  servicios: any [] = [];
  servicioABuscar = ''

  constructor(private servicioService: ServicioService, private ruta:ActivatedRoute) { }

  ngOnInit(): void {
    this.getTodoServicio();
  }

  private getTodoServicio(){
    this.servicioService.getTodosServicios().subscribe((response) =>{
      this.servicios = response;
    },
    (error) => { console.error(error); }
    );
    this.servicioService.getTodosServicios().subscribe((servicios) => console.log(servicios));
  }

}
