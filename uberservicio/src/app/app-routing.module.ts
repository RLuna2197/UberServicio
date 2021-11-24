import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { PedidoComponent } from './pedido/pedido.component';
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
  path:'verS', component: VerServicioComponent
}
,
{
  path:'pedido', component: PedidoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
