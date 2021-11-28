import { Pipe, PipeTransform } from '@angular/core';
import { Servicio } from './model/servicio';

@Pipe({
  name: 'filtroServicio'
})
export class FiltroServicioPipe implements PipeTransform {

  transform(value:Servicio[], servicioABuscar: string): Servicio[] {
      return value.filter(value => !servicioABuscar || this.coincide(value.nombre, servicioABuscar) ||
      this.coincide(value.descripcion, servicioABuscar));
  
  }

  coincide(valor1: string, valor2: string){
    return valor1
    .toLowerCase()
    .match(valor2.toLowerCase())
  }

}
