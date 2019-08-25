import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IntroComponent } from './intro/intro.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { DependentesComponent } from './dependentes/dependentes.component';
import { DependenteOpenComponent } from './dependente-open/dependente-open.component';
import { MainDependenteComponent } from './main-dependente/main-dependente.component';
import { CadastroDependenteComponent } from './cadastro-dependente/cadastro-dependente.component';
import { MainParceiroComponent } from './main-parceiro/main-parceiro.component';


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
  },

  {
    path: 'main-dependente',
    component: MainDependenteComponent
  },
  {
    path: 'cadastro-dependente',
    component: CadastroDependenteComponent
  },

  {
    path: 'main-parceiro',
    component: MainParceiroComponent
  }
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
