import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IntroComponent } from './intro/intro.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { DependentesComponent } from './dependentes/dependentes.component';
import { DependenteOpenComponent } from './dependente-open/dependente-open.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
    
  },

  {
    path: 'intro',
    component: IntroComponent
  },

  {
    path: 'cadastro',
    component: CadastroComponent
  },

  {
    path: 'cardapio',
    component: CardapioComponent
  },

  {
    path: 'dependentes',
    component: DependentesComponent
  },

  {
    path: 'dependentes-open',
    component: DependenteOpenComponent
  }
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
