import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { LoginComponent } from './login/login.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { VerServicioComponent } from './ver-servicio/ver-servicio.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ServicioComponent } from './servicio/servicio.component';
import { HistorialServicioComponent } from './historial-servicio/historial-servicio.component';
import { PedidoComponent } from './pedido/pedido.component';

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
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
