import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { LoginComponent } from './login/login.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { VerServicioComponent } from './ver-servicio/ver-servicio.component';
import { VerServicioVComponent} from './ver-servicio-v/ver-servicio-v.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ServicioComponent } from './servicio/servicio.component';
import { HistorialServicioComponent } from './historial-servicio/historial-servicio.component';
import { PedidoComponent } from './pedido/pedido.component';
import { HomeVComponent } from './home-v/home-v.component';
import { Nadvar2vComponent } from './nadvar2v/nadvar2v.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltroServicioPipe } from './filtro-servicio.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonModule } from '@angular/common';
import { VerServicioCComponent } from './ver-servicio-c/ver-servicio-c.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    LoginComponent,
    CategoriaComponent,
    HomeComponent,
    VerServicioComponent,
    UsuarioComponent,
    ServicioComponent,
    HistorialServicioComponent,
    VerServicioVComponent,
    VerServicioCComponent,
    PedidoComponent,
    HomeVComponent,
    Nadvar2vComponent,
    PerfilComponent,
    PedidoComponent,
    FiltroServicioPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
