import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bitcoin } from '../model/bitcoin';
import { Comentario } from '../model/comentario';
import { Euro } from '../model/euro';
import { Pedido } from '../model/pedido';
import { Servicio } from '../model/servicio';
import { ComentarioService } from '../services/comentario.service';
import { ConversionService } from '../services/conversion.service';
import { PedidoService } from '../services/pedido.service';
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
  euro: Euro = new Euro();
  bitcoin: Bitcoin = new Bitcoin();
  idPersona: string= "" ;
  inputComentario: string="";
  califi: number=0;
  inputPrecio: number=0;
  comentarioNuevo: Comentario = new Comentario();
  pedidoNuevo: Pedido = new Pedido();
  conversionEuro: number=0;
  conversionBitcoin: number=0;
  opcionSeleccionado: number=0;
  total: number=0;
  simbolo: string = "$";
  inputFechaInicio: Date = new Date();
  inputFechaFin: Date = new Date();
  inputHoraInicio: Date = new Date();
  inputHoraFin: Date = new Date();

  constructor(private fb:FormBuilder, private dataApi: ServicioService , private datApiComen: ComentarioService, private dataApiPerson: PersonaService, private DataConversion: ConversionService, private DataPedio: PedidoService) {
    this.formularioComentario=this.fb.group({
      comentario:['',Validators.required],
      calificacion:['',Validators.required]    
    })
   }
  
  ngOnInit( ): void {

    localStorage.setItem('id', '7');
    this.getEuro();
    this.getBitcoin();
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
      this.inputPrecio = Number(this.servicios[0].precio);
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


  //Obtener Valor Euro
  private getEuro(){
    this.DataConversion.getValorEuro().subscribe((response) => {
      this.euro.conversion_rate = response.conversion_rate;
      this.conversionEuro = this.euro.conversion_rate;
    },
      (error) => { console.error(error); }
    );
   
    //this.DataConversion.getValorEuro().subscribe((euro) => console.log(euro.conversion_rate));
    
  }

  //Obtener Valor Bitcoin
  private getBitcoin(){
    this.DataConversion.getValorBitcoin().subscribe((response) => {
      this.bitcoin.rate = response.rate;
      this.conversionBitcoin = this.bitcoin.rate;
    },
      (error) => { console.error(error); }
    );
   
    //this.DataConversion.getValorEuro().subscribe((euro) => console.log(euro.conversion_rate));
    
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

    this.getComentarios();
    this.getServicios();
  }


  agregarPedido(){
    this.pedidoNuevo.fechaInicio = this.inputFechaInicio;
    this.pedidoNuevo.fechaFin = this.inputFechaFin;
    this.pedidoNuevo.horaInicio = this.inputHoraInicio;
    this.pedidoNuevo.horaFin = this.inputHoraFin;
    this.pedidoNuevo.total = this.total;
    this.pedidoNuevo.idPedido = 5;

    this.DataPedio.savePedido(this.pedidoNuevo).subscribe(res => {
      console.log(res);

    }, err => {
      console.log(err);
    })
    
  }

  //Asignar cambio
  monedaCambio(){
      if(this.opcionSeleccionado == 1){
        this.simbolo = "$";
        this.total = this.inputPrecio;
      }
      if(this.opcionSeleccionado == 3){
        this.simbolo="₿";
        this.getBitcoin();
        this.total = this.inputPrecio * this.conversionBitcoin;
      }
      if(this.opcionSeleccionado == 2){
        this.simbolo="€";
        this.getEuro();
        this.total = this.inputPrecio * this.conversionEuro;
      }
  }
  
}
