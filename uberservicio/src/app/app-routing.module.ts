import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarPerfilComponent } from './actualizar-perfil/actualizar-perfil.component';
import { ActualizarSComponent } from './actualizar-s/actualizar-s.component';
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
import { VerServicioCComponent } from './ver-servicio-c/ver-servicio-c.component';
import { VerServicioVComponent } from './ver-servicio-v/ver-servicio-v.component';
import { VerServicioComponent } from './ver-servicio/ver-servicio.component';

const routes: Routes = [

{
  path:'', redirectTo:'login', pathMatch:'full'
}
,

  { 
    path:'home', component: HomeComponent

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
  path:'verS/:parametro', component: VerServicioComponent
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
,
{
  path:'verserviciov', component: VerServicioVComponent
}
,
{
  path:'login', component: LoginComponent
}
,
{
  path:'verservicioc', component: VerServicioCComponent
}
,
{
  path:'actuaS', component: ActualizarSComponent
},
{
  path:'actualizar-perfil', component: ActualizarPerfilComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
