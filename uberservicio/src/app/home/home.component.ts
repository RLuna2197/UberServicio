import { AotCompiler } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Servicio } from '../model/Servicio';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  servicios: Servicio[] = [];
  constructor(private dataApi: ApiService) { }

  ngOnInit(): void {
    this.getServicios();
  }

  private getServicios() {

    this.dataApi.getServicios().subscribe((response) => {
      this.servicios = response;
    },
      (error) => { console.error(error); }
    );

    this.dataApi.getServicios().subscribe((servicios) => console.log(servicios)); // mostrar en consola
  }

}
