import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { HistorialServicioComponent } from './historial-servicio/historial-servicio.component';
import { HomeVComponent } from './home-v/home-v.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Nadvar2vComponent } from './nadvar2v/nadvar2v.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PersonaComponent } from './persona/persona.component';
import { ServicioComponent } from './servicio/servicio.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { VerServicioComponent } from './ver-servicio/ver-servicio.component';

const routes: Routes = [

  { 
    path:'', component: HomeComponent

  }
,
{ 
  path:'usuario', component: UsuarioComponent
}
,
{ 
  path:'persona', component: PersonaComponent
}
,
{
  path:'servicio', component: ServicioComponent
}
,
{
  path:'categoria', component: CategoriaComponent
}
,
{
  path:'verS/:id', component: VerServicioComponent
}
,
{
  path:'pedido', component: PedidoComponent
}
,
{
  path:'login', component: LoginComponent
}
,
{
  path:'homev', component: HomeVComponent
}
,
{
  path:'nadv', component: Nadvar2vComponent
}
,
{
  path:'perfil', component: PerfilComponent
}
,
{
  path:'historials', component: HistorialServicioComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
