import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonaComponent } from './persona/persona.component';
import { UsuarioComponent } from './usuario/usuario.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
