import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IntroComponent } from './intro/intro.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CardapioComponent } from './cardapio/cardapio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/intro',
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
    path: 'dashboard-representantes',
    component: CardapioComponent
  },

  {
    path: 'dashboard-parceiros',
    component: CardapioComponent
  },

  {
    path: 'dashboard-dependentes',
    component: CardapioComponent
  }
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
